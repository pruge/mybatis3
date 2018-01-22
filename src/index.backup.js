import xml2js from 'xml2js'
import nodeEval from 'node-eval'
import { readFileSync } from 'fs'
import { forEach, find, chain, isEmpty, get, isArray, isObject, isFunction } from 'lodash'
import Promise from 'bluebird'
import config from './config'
import sqlstring from 'sqlstring'
import { join } from 'path'
import $log from './log'
const parser = new xml2js.Parser({
  trim: true,
  normalize: true,
  preserveChildrenOrder: true,
  explicitChildren: true,
  explicitCharkey: true,
  charsAsChildren: true
})
const log = $log.getInstance('mybatis3')

class Mybatis3 {
  sqlData = {} // xml query
  references = [] // include가 정의된 array

  setConnection(pool) {
    this.pool = pool
  }

  getConnection() {
    if (isFunction(this.pool)) {
      return this.pool()
    } else {
      return this.pool
    }
  }

  // loadQuery(path, idx) {
  loadQuery(path, xmlFilenames) {
    forEach(xmlFilenames, (filename, idx) => {
      this.sqlData = idx === 0 ? {} : this.sqlData

      const xml = readFileSync(join(path, filename), 'utf-8')
      // log.debug('xmls', xml)
      parser.parseString(xml, (err, data) => {
        if (err) {
          return console.error(err.stack.red || err)
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
    // log.debug(this.sqlData)
  }

  /**
   * query에 대한 function으로 반환 받기
   */
  getQuery() {
    let rst = {}
    forEach(this.sqlData, (sql, key) => {
      rst[key] = async (params, conn) => {
        const qry = await this.process(this.sqlData[key], params)
          .then(xml => this.processVariable(xml._, params))
          .catch(err => console.error(err.stack.red))

        const _conn = this.getConnection()
        if (conn) {
          return conn.query(qry)
        } else if (_conn) {
          return _conn.query(qry)
        } else {
          return qry
        }
      }
    })
    return rst
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  async process(xml, params) {
    // log.debug(xml)
    return Promise.resolve(xml).then(async xml => {
      // const keys = Object.keys(xml).filter(key => !/_|\${1,2}/.test(key))
      xml._ = ''

      // xml.$$ update
      let processedArr = []
      await Promise.each(xml['$$'], async item => {
        log.debug(item)
        if (item['#name'] === '__text__') {
        } else {
          const proc = `process${this.capitalizeFirstLetter(item['#name'])}`
          await this[proc](item, params)
          // log.debug(str)
        }
        processedArr.push(item._)
      })
      // await Promise.each(keys, async key => {
      //   const val = xml[key]
      //   const proc = `process${this.capitalizeFirstLetter(key)}`
      //   xml._ = xml._ || ''
      //   const str = await this[proc](val, params)
      //   log.debug('str', str)
      //   log.debug(xml)
      //   xml._ += ' ' + str
      // })
      // xml -> xml.$$ -> xml._ build
      xml._ = processedArr.join(' ')
      log.debug(xml, 'processed')
      return xml
    })
  }

  async processInclude(xmls, params) {
    log.info('--- process include')
    let str = ''
    await Promise.each(xmls, async xml => {
      const id = xml.$.refid
      const t = find(this.references, { $: { id: id } })
      if (!t) {
        throw new Error(`There is no include id: ${id}`)
      }
      // log.dubug(t, 't')
      await this.processDeep(t, params)
      str += t._
    })
    return str
  }

  async processDeep(xml, params) {
    const keys = Object.keys(xml).filter(key => !/_|\$/.test(key))
    if (keys.length !== 0) {
      await this.process(xml, params)
    }
  }

  async processIf(item, params) {
    log.info('--- process if')
    let str = ''
    const test = await this.processVariable(item.$.test, params)
    if (nodeEval(test)) {
      item._ = await this.processVariable(item._, params)
    } else {
      item._ = ''
    }
    // await Promise.each(xmls, async xml => {
    //   // log.debug(xml)
    //   const test = await this.processVariable(xml.$.test, params).then(this.removeFirstAndOr)
    //   // log.debug(test)
    //   if (nodeEval(test)) {
    //     await this.processDeep(xml, params)
    //     str += xml._
    //   }
    // })
    // log.log('str', str)
    return str
  }

  async processChoose(xmls, params) {
    log.info('--- process Choose')
    let str = ''
    await Promise.each(xmls, async xml => {
      // log.debug(xml)
      let flgMatch = false
      await Promise.each(xml.when, async _case => {
        const test = await this.processVariable(_case.$.test, params).then(this.removeFirstAndOr)
        // log.debug(params, test)
        if (nodeEval(test)) {
          flgMatch = true
          await this.processDeep(_case, params)
          str += _case._
          throw new Promise.CancellationError('matched')
        }
        // log.debug(_case)
      }).catch(Promise.CancellationError, () => '')
      if (!flgMatch && xml.otherwise) {
        // log.warn('not matched')
        str += xml.otherwise[0]._
      }
    })
    return str
  }

  async processTrim(xmls, params) {
    log.info('--- process trim')
    let str = ''
    // log.debug(xmls)
    await Promise.each(xmls, async xml => {
      await this.processDeep(xml, params)
      str += xml._
      str = this.processFix(str, xml)
    })
    // log.debug('trim', str)
    return str
  }

  async processWhere(xmls, params) {
    log.info('--- process where')
    let str = ''
    await Promise.each(xmls, async xml => {
      // log.debug(xml)
      await this.processDeep(xml, params)
      str += xml._
    })
    str = this.processFix(str, { $: { prefixOverrides: 'and |or ', prefix: 'WHERE' } })

    return str
  }

  async processSet(xmls, params) {
    log.info('--- process set')
    let str = ''
    log.debug(xmls)
    await Promise.each(xmls, async xml => {
      // log.debug(xml)
      await this.processDeep(xml, params)
      str += xml._
    })
    str = this.processFix(str, { $: { suffixOverrides: ',', prefix: 'SET' } })

    return str
  }

  async processForeach(xmls, params) {
    log.info('--- process foreach')
    let str = ''
    // log.debug(xmls)
    await Promise.each(xmls, async xml => {
      // log.debug(xml)
      const collection = get(params, xml.$.collection)
      // log.debug(collection)
      await Promise.each(collection, async (col, idx) => {
        const qry = await this.processVariable(xml._, {
          [xml.$.item]: col,
          [xml.$.index]: idx
        })
        str += qry + xml.$.separator
      })
      xml.$.suffixOverrides = xml.$.separator
      xml.$.prefix = xml.$.open
      xml.$.suffix = xml.$.close
      str = this.processFix(str, xml)
    })
    return str
  }

  async processBind(xmls, params) {
    // log.info('--- process bind')
    let str = ''
    // log.debug(xmls)
    await Promise.each(xmls, async xml => {
      // log.debug(xml, this.processVariable(xml.$.value, params))
      const s = await this.processVariable(xml.$.value, params).then(this.removeFirstAndOr)
      params[xml.$.name] = nodeEval(s)
    })
    return str
  }

  async processVariable(qry, params) {
    let rst
    if (!params) {
      rst = qry
    }

    const escape = sqlstring.escape
    const reg = config.sql.queryFormat ? new RegExp(config.sql.queryFormat, 'g') : /#{([\w_.]+)}/g
    rst = qry.replace(reg, function (txt, key) {
      key = key.replace(/\(\)/g, '')
      let val = get(params, key)
      if (isFunction(val)) {
        val = val()
      } else if (isObject(val) || isArray(val)) {
        val = true
      }
      return escape(val, config.sql.stringifyObjects, config.sql.timezone)
    })
    return (
      rst
        .replace(/^\s+|\s+$/g, '')
        // .replace(/\s+/g, ' ')
        .replace(/NULL/g, 'undefined')
    )
  }

  async removeFirstAndOr(str) {
    return str.replace(/ and /gi, ' && ').replace(/ or /gi, ' || ')
  }

  processFix(str, xml) {
    str = str.replace(/^\s+|\s+$/g, '')
    // log.debug('fix', str)
    if (xml.$.prefixOverrides) {
      const reg = new RegExp(`^${xml.$.prefixOverrides}`, 'gi')
      str = str.replace(reg, '')
    }
    // log.debug('fix', str)
    if (xml.$.suffixOverrides) {
      const reg = new RegExp(`${xml.$.suffixOverrides}$`, 'gi')
      str = str.replace(reg, '')
    }
    // log.debug('fix', '|' + str + '|')
    if (!isEmpty(str)) {
      str = `${xml.$.prefix || ''} ${str} ${xml.$.suffix || ''}`
    }
    // log.debug('fix', str)
    return str
  }
}

export default new Mybatis3()
