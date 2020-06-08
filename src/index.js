import xml2js from 'xml2js'
import nodeEval from 'node-eval'
import { readFileSync } from 'fs'
import {
  forEach,
  find,
  chain,
  isEmpty,
  partialRight,
  get,
  isArray,
  isObject,
  isFunction
} from 'lodash'
import Promise from 'bluebird'
import config from './config'
import sqlstring from 'sqlstring'
import { join, extname } from 'path'
// import $log from './log'
const parser = new xml2js.Parser({
  trim: true,
  normalize: true,
  preserveChildrenOrder: true,
  explicitChildren: true,
  explicitCharkey: true,
  charsAsChildren: true
})
// const log = $log.getInstance('mybatis3')

class Mybatis3 {
  constructor() {
    this.tablesRaw = []
    this.tables = []
    this.lastQuery = {}
    this.sqlData = {} // xml raw query
    this.references = [] // include가 정의된 array
  }

  setConnection(pool) {
    this.pool = pool
    this.pool.getConnectionAsync = Promise.promisify(this.pool.getConnection)
  }

  getConnection() {
    if (isFunction(this.pool)) {
      return this.pool()
    } else {
      return this.pool
    }
  }

  fnModel(name, conn) {
    const ctx = {}
    const table = this.getQuery(name)
    const self = this
    forEach(table, (fn, key) => {
      if (key === 'lastQuery') {
        Object.defineProperty(ctx, key, {
          get: () => self.lastQuery[name]
        })
      } else {
        ctx[key] = partialRight(fn, conn)
      }
    })
    return ctx
  }

  async transaction(execQuery) {
    let connection, rst
    try {
      connection = await this.pool.getConnectionAsync()
      connection.table = partialRight(this.fnModel, connection).bind(this)
      await connection.beginTransaction()
      rst = await execQuery(connection)
      await connection.commit()
      connection.release()
    } catch (e) {
      await connection.rollback()
      connection.release()
      throw e
    }
    return rst
  }

  // loadQuery(path, idx) {
  loadQuery(tableName, path, xmlFilenames) {
    forEach(xmlFilenames, (filename, idx) => {
      this.sqlData = idx === 0 ? {} : this.sqlData
      const ext = extname(filename)
      const dir = ext ? join(path, filename) : join(path, filename + '.xml')
      const xml = readFileSync(dir, 'utf-8')
      // log.debug('xmls', xml)
      parser.parseString(xml, (err, data) => {
        if (err) {
          return console.error(err.stack || err)
        }
        const jsonData = data.query
        this.references = jsonData.sql
        const commands = ['select', 'update', 'insert', 'delete']
        chain(commands)
          .map(cmd => jsonData[cmd] || [])
          .flatten()
          .map(item => (this.sqlData[item.$.id] = item))
          .value()
      })
    })
    this.tablesRaw[tableName] = this.sqlData
    delete this.tables[tableName]
    // log.debug(this.sqlData)
  }

  table(tableName, dir, xmls) {
    if (xmls) {
      this.loadQuery(tableName, dir, xmls)
    } else {
      return this.getQuery(tableName)
    }
  }

  model() { }

  /**
   * query에 대한 function으로 반환 받기
   */
  getQuery(tableName) {
    if (this.tables[tableName]) return this.tables[tableName]
    const self = this
    const sqlData = this.tablesRaw[tableName]
    const rst = {
      get lastQuery() {
        return self.lastQuery[tableName]
      }
    }
    forEach(sqlData, (sql, key) => {
      rst[key] = async (params, conn) => {
        const qry = await this.process(sqlData[key], params)
          .then(xml => this.processVariable(xml._, params))
          .catch(err => console.error(err.stack))

        self.lastQuery[tableName] = qry

        if (conn) {
          return conn.query(qry).finally(() => conn.release())
        } else {
          const _conn = this.getConnection()
          if (_conn) {
            return _conn.query(qry)
          } else {
            return qry
          }
        }
      }
    })

    this.tables[tableName] = rst
    return rst
  }

  async process(xml, params) {
    // log.debug(xml)
    return Promise.resolve(xml).then(async xml => {
      // process xml.$$
      xml._ = ''
      await Promise.each(xml.$$, async item => {
        // log.debug(item)
        if (item['#name'] === '__text__') {
        } else {
          const proc = `process${this.capitalizeFirstLetter(item['#name'])}`
          await this[proc](item, params)
        }
        // log.debug(item)
      })
      // xml -> xml.$$ -> xml._ build
      this.merge_(xml)
      // log.debug(xml, 'processed')
      // log.debug(xml['$$'][1], 'processed')
      return xml
    })
  }

  async processInclude(item, params) {
    // log.info('--- process include')
    const id = item.$.refid
    const t = find(this.references, { $: { id: id } })
    if (!t) {
      throw new Error(`There is no include id: ${id}`)
    }
    // log.debug(t, 't')
    await this.processDeep(t, params)
    item._ = t._
  }

  async processDeep(xml, params) {
    // log.info('--- process deep')
    // log.debug(xml)
    const keys = Object.keys(xml).filter(key => !/_|\${1,2}|#name/.test(key))
    if (keys.length !== 0) {
      await this.process(xml, params)
    }
  }

  async processIf(item, params) {
    // log.info('--- process if')
    const test = await this.processVariable(item.$.test, params).then(this.changeAndOr)
    if (nodeEval(test)) {
      await this.processDeep(item, params)
      item._ = await this.processVariable(item._, params)
    } else {
      item._ = ''
    }
  }

  async processChoose(item, params) {
    // log.info('--- process Choose')
    // log.debug(item, 'item')
    await Promise.each(item.$$, async _case => {
      // log.debug(_case, '_case')
      const testStr = get(_case, '$.test')
      if (testStr) {
        const test = await this.processVariable(testStr, params).then(this.changeAndOr)
        // // log.debug(params, test)
        if (nodeEval(test)) {
          await this.processDeep(_case, params)
          _case._ = await this.processVariable(_case._, params)
          throw new Promise.CancellationError('matched')
        } else {
          _case._ = ''
        }
      }
      // log.debug(_case)
    }).catch(Promise.CancellationError, () => '')
    this.merge_(item, true)
    // log.debug(item, 'item')
  }

  async processTrim(item, params) {
    // log.info('--- process trim')
    // log.debug(item, 'item')
    await Promise.each(item.$$, async _case => {
      // log.debug(_case, '_case')
      const testStr = get(_case, '$.test')
      if (testStr) {
        const test = await this.processVariable(testStr, params).then(this.changeAndOr)
        // // log.debug(params, test)
        if (nodeEval(test)) {
          await this.processDeep(_case, params)
          _case._ = await this.processVariable(_case._, params)
        } else {
          _case._ = ''
        }
      }
      // log.debug(_case)
    })
    this.merge_(item)
    this.processFix(item, item)
  }

  async processWhere(item, params) {
    // log.info('--- process where')
    // log.debug(item, 'item')
    await Promise.each(item.$$, async _case => {
      // log.debug(_case, '_case')
      const testStr = get(_case, '$.test')
      if (testStr) {
        const test = await this.processVariable(testStr, params).then(this.changeAndOr)
        // // log.debug(params, test)
        if (nodeEval(test)) {
          await this.processDeep(_case, params)
          _case._ = await this.processVariable(_case._, params)
        } else {
          _case._ = ''
        }
      }
      // log.debug(_case)
    })
    this.merge_(item)
    this.processFix(item, { $: { prefixOverrides: 'and |or ', prefix: 'WHERE' } })
    // log.debug(item, 'item')
  }

  async processSet(item, params) {
    // log.info('--- process set')
    // log.debug(item, 'item')
    await Promise.each(item.$$, async _case => {
      // log.debug(_case, '_case')
      const testStr = get(_case, '$.test')
      if (testStr) {
        const test = await this.processVariable(testStr, params).then(this.changeAndOr)
        // // log.debug(params, test)
        if (nodeEval(test)) {
          await this.processDeep(_case, params)
          _case._ = await this.processVariable(_case._, params)
        } else {
          _case._ = ''
        }
      }
      // log.debug(_case)
    })
    this.merge_(item)
    this.processFix(item, { $: { suffixOverrides: ',', prefix: 'SET' } })
    // log.debug(item, 'item')
  }

  async processForeach(item, params) {
    // log.info('--- process foreach')
    // log.debug(item, 'item')
    await this.processDeep(item, params)
    const collection = get(params, item.$.collection) || []
    const processedArr = []
    // log.debug(collection, 'collection')
    await Promise.each(collection, async (col, idx) => {
      const qry = await this.processVariable(item._, {
        [item.$.item]: col,
        [item.$.index]: idx
      })
      processedArr.push(qry)
    })
    item._ = processedArr.join(item.$.separator)
    item.$.suffixOverrides = item.$.separator
    item.$.prefix = item.$.open
    item.$.suffix = item.$.close
    this.processFix(item, item)
    // log.debug(item, 'item')
  }

  async processBind(item, params) {
    // log.info('--- process bind')
    // log.debug(item, 'item')
    const s = await this.processVariable(item.$.value, params).then(this.changeAndOr)
    params[item.$.name] = nodeEval(s)
  }

  async processVariable(qry, params) {
    let rst
    if (!params) {
      rst = qry
    }

    const escape = sqlstring.escape
    const reg = config.sql.queryFormat ? new RegExp(config.sql.queryFormat, 'g') : /#{([\w_.]+)}/g
    rst = qry
      .replace(/\)/g, ' )')
      .replace(/\( \)/g, '()')
      .replace(reg, (txt, key) => {
        key = key.replace(/\(\)/g, '')
        let val = get(params, key)
        if (isFunction(val)) {
          val = val()
        } else if (isObject(val) || isArray(val)) {
          val = true
        }
        return escape(val, config.sql.stringifyObjects, config.sql.timezone)
      })
    return rst
      .replace(/^\s+|\s+$/g, '')
      .replace(/\s+/g, ' ')
      .replace(/NULL/g, 'undefined')
  }

  async changeAndOr(str) {
    return str.replace(/ and /gi, ' && ').replace(/ or /gi, ' || ')
  }

  processFix(item, xml) {
    if (xml.$.prefixOverrides) {
      const reg = new RegExp(`^${xml.$.prefixOverrides}`, 'gi')
      item._ = item._.replace(reg, '')
    }
    // log.debug('fix', item._)
    if (xml.$.suffixOverrides) {
      const reg = new RegExp(`${xml.$.suffixOverrides}$`, 'gi')
      item._ = item._.replace(reg, '')
    }
    // log.debug('fix', '|' + item._ + '|')
    if (!isEmpty(item._)) {
      item._ = `${xml.$.prefix || ''} ${item._} ${xml.$.suffix || ''}`
    }
    // log.debug('fix', item._)
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  merge_(xml, choose) {
    const processedArr = []
    forEach(xml.$$, item => {
      if (item._) {
        processedArr.push(item._)

        if (choose) {
          return false
        }
      }
      // item._ && processedArr.push(item._)
    })
    xml._ = processedArr.join(' ')
  }
}

export default new Mybatis3()
