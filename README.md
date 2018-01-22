# mybatis3 mapper

mybatis3 mapper

![Travis](https://travis-ci.org/pruge/mybatis3.svg?branch=master)

## Support

* select, upate, delete, insert
* include
* if
* choose, when, otherwise
* trim, where, set
* foreach
* bind

## Usage
```
var mybatis3 = require('mybatis3')
mybatis3.loadQuery('tableName', 'path/to/xmls', [xmls])

const Board = mybatis3.table('tableName')
Board.getList().then()
```

## example

### select, update, insert, delete
```xml
// basic.xml
<query>
	<insert id="insert">
		INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE)
		VALUES (:brdtitle, :brdmemo, :brdwriter, NOW())
	</insert>
</query>
```

```js
var mybatis3 = require('mybatis3')
mybatis3.loadQuery('Board', 'path/to/xmls', ['basic'])

var Board = mybatis3.table('Board')
var params = {
  brdtitle: 'test board',
  brdmemo: 'test',
  brdwriter: 'james kim'
}

// 1. get query
Board.insert(params).then(sql => console.log(sql))
// INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE) VALUES ('test board', 'test', 'james kim', NOW())

// 2. execute-1, auto release
var conn = // mysql connection, has `query` method
Board.insert(params, conn).then(data => console.log(data))
// executed result

// 3. execute-2
var pool = // mysql connection pool
mybatis3.setConnection(pool)
Board.insert(params).then(data => console.log(data))
// executed result
```

### more example
see test