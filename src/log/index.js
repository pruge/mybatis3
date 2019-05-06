import 'colors'
import { basename } from 'path'
import pino from 'pino'
import moment from 'moment'
import { isObjectLike, forEach } from 'lodash'
import config from '../config'
import { inspect } from 'util'

class LoggerPino {
  logger
  stopwatch = {}

  types = {
    60: 'fatal',
    50: 'error',
    40: 'warn',
    30: 'info',
    20: 'debug',
    10: 'trace'
  }

  levelColors = {
    default: 'white',
    60: 'bgRed',
    50: 'red',
    40: 'yellow',
    30: 'green',
    20: 'magenta',
    10: 'grey'
  }

  init() {
    if (config.log.pretty) {
      const pinoPrettyOpts = this.getPinoPrettyOpts()
      const pretty = pino.pretty(pinoPrettyOpts)
      pretty.pipe(process.stdout)
      this.logger = pino({
        name: 'clingstack',
        safe: true
      }, pretty)
    } else {
      this.logger = pino({
        name: 'clingstack',
        safe: true
      })
    }
    this.logger.level = config.log.level
  }

  getPinoPrettyOpts() {
    const self = this
    return {
      formatter: function (value, opts) {
        // console.log(value)
        const time = moment(value.time).format(config.log.timeFormat)
        const type = self.types[value.level]
        const color = self.levelColors[value.level]
        const elapsed = self.stopwatch[value.name] ? value.time - self.stopwatch[value.name] : 0
        const msg = value.msg || '' + ''
        const file = config.log.traceLinenumber ? `[${value.file || ''}]` : ''
        self.stopwatch[value.name] = value.time
        const formatted = `${time} - ${type[color]}: [${value.name}] ${msg[color]} +${elapsed}ms ${file}`
        if (value.data) {
          return formatted + '\n' + inspect(value.data, false, 2, true)
        } else if (value.stack) {
          const str = value.type.toLowerCase() === 'error' ? value.stack.red : value.stack
          return formatted + '\n' + str
        } else {
          return formatted
        }
      }
    }
  }

  getInstance(namespace) {
    const child = this.logger.child({ name: namespace })
    child.level = config.log.map[namespace] || config.log.map['*']
    if (config.log.traceLinenumber) {
      forEach(this.types, (type) => {
        this.hook(child, type)
      })
    }
    child.start = () => {
      this.stopwatch[namespace] = undefined
    }
    return child
  }

  hook(child, type) {
    const self = this
    child['_' + type] = child[type]
    child[type] = function () {
      const args = [].slice.call(arguments)
      // console.log(args)
      if (!isObjectLike(args[0])) {
        // console.log(1)
        args.splice(0, 0, { file: self.analyze(3) })
      } else if (!args[0].isBoom && !(args[0] instanceof Error)) {
        // console.log(2)
        args[0] = {
          file: self.analyze(3),
          data: args[0]
        }
      }
      return child['_' + type].apply(child, args)
    }
  }

  analyze(line) {
    let params = {}
    const err = new Error()
    Error.captureStackTrace(err)
    const stack = err.stack
    const stacklist = stack.split('\n').slice(line)
    const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi
    const stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi

    const s = stacklist[0]
    const sp = stackReg.exec(s) || stackReg2.exec(s)
    if (sp && sp.length === 5) {
      params.method = sp[1]
      params.path = this.short(sp[2])
      params.line = sp[3]
      params.pos = sp[4]
      params.file = basename(sp[2])
    }
    return params.path + ' ' + params.line + ':' + params.pos
  }

  short(path) {
    path = path.replace(/.*webpack:/, '')
    var arr = path.split('/')
    while (arr.length - 4 > 0) {
      arr.shift()
    }
    path = arr.join('/')
    return path
  }
}
const logger = new LoggerPino()
logger.init()
export default logger
