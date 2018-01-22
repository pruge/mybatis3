export default {
  sql: {
    queryFormat: /:([\w_.()]+)/g,
    stringifyObjects: false,
    timezone: false
  },
  log: {
    level: 'info', // 'fatal', 'error', 'warn', 'info', 'debug', 'trace'
    traceLinenumber: true,
    timeFormat: 'YYYY-MM-DD A hh:mm:ss',
    pretty: true,
    map: {
      mybatis3: 'fatal',
      '*': 'trace'
    }
  }
}
