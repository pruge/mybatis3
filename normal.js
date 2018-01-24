var mybatis3 = require('./lib/library')
var { join } = require('path')

mybatis3.table('Board', join(__dirname, 'test/xml'), ['basic'])
var Board = mybatis3.table('Board')

Board.getList().then(sql => console.log('--', sql))
setTimeout(() => {
  console.log('-', Board.lastQuery)
}, 10)
