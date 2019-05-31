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
```js
var mybatis3 = require('mybatis3')
mybatis3.table('tableName', 'path/to/xmls', [xmls])

const Board = mybatis3.table('tableName')
Board.getList().then()
```

## example

### insert
```
// Read files in custom folders
 .
 ├── xmls
 │     └── basic.xml
 └── app.js
```
```xml
// basic.xml
<?xml version="1.0"?>
<query>
	<insert id="insert">
		INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE)
		VALUES (:brdtitle, :brdmemo, :brdwriter, NOW())
	</insert>
</query>
```

```js
var mybatis3 = require('mybatis3')
mybatis3.table('Board', 'path/to/xmls', ['basic'])

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
var conn = // mysql connection, has `query, release` method
Board.insert(params, conn).then(data => console.log(data)) // executed result
Board.lastQuery // can access last query by `lastQuery` getter


// 3. execute-2
var pool = // mysql connection pool, has `query` method
mybatis3.setConnection(pool)
Board.insert(params).then(data => console.log(data)) // executed result
Board.lastQuery // can access last query by `lastQuery` getter

// 4. transaction
var pool = // mysql connection pool, has `getConnection` method
mybatis3.setConnection(pool)
mybatis3.transaction(async conn => {
	const Board = conn.table('Board')
	const data = await Board.getList()
	Board.lastQuery // can access last query by `lastQuery` getter
	return data
}).then(data => console.log(data))
```

### more example
see test
[https://github.com/pruge/mybatis3/tree/master/test](https://github.com/pruge/mybatis3/tree/master/test)

### basic
```xml
<?xml version="1.0"?>
<query>
	<sql id="includeWhere">
		WHERE id=:brdno
	</sql>
	<sql id="includeWhere2">
		WHERE id=:brdno
	</sql>
	<select id="getList">
		SELECT * FROM TBL_BOARD
	</select>
	<insert id="insert">
		INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE)
		VALUES (:brdtitle, :brdmemo, :brdwriter, NOW())
	</insert>
	<update id="update">
		UPDATE TBL_BOARD
		SET BRDTITLE=:brdtitle, BRDMEMO=:brdmemo, BRDWRITER=:brdwriter
	</update>
	<delete id="delete">
		DELETE FROM TBL_BOARD
		<include refid="includeWhere" />
	</delete>
</query>
```

### if
```xml
<?xml version="1.0"?>
<query>
	<insert id="insert">
		INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE)
		VALUES (:brdtitle, :brdmemo, :brdwriter, NOW())
		<if test=":cnt === 0 || :cnt === undefined">
			ORDER BY created DESC
		</if>
		<if test=":cnt === 1">
			ORDER BY created DESC
		</if>
		<if test=":cnt === 2">
			ORDER BY created DESC
		</if>
		TEST
	</insert>
</query>
```

### choose, when, otherwise
```xml
<?xml version="1.0"?>
<query>
	<select id="getList">
		SELECT * FROM BLOG WHERE state = ‘ACTIVE’
		<choose>
			<when test=":title != null">
				AND title like :title
			</when>
			<when test=":author != null and :author.name != null">
				AND author_name like :author.name
			</when>
			<otherwise>
				AND featured = 1
			</otherwise>
		</choose>
	</select>
</query>
```

### foreach
```xml
<?xml version="1.0"?>
<query>
	<select id="selectPostIn">
		SELECT *
		FROM POST P
		WHERE ID in
		<foreach item="item" index="index" collection="list" open="(" separator="," close=")">
			:item
		</foreach>
	</select>
</query>
```

### trim, where, set
```xml
<?xml version="1.0"?>
<query>
	<select id="getList">
		SELECT * FROM BLOG
		<where>
			<if test=":state != null">
				state = :state
			</if>
			<if test=":title != null">
				AND title like :title
			</if>
			<if test=":author != null and :author.name != null">
				AND author_name like :author.name
			</if>
		</where>
	</select>
	<select id="getList2">
		SELECT * FROM BLOG
		<trim prefix="WHERE" prefixOverrides="AND |OR ">
			<if test=":state != null">
				state = :state
			</if>
			<if test=":title != null">
				AND title like :title
			</if>
			<if test=":author != null and :author.name != null">
				AND author_name like :author.name
			</if>
		</trim>
	</select>
	<update id="updateAuthorIfNecessary">
		update Author
		<set>
			<if test=":username != null">
				username=:username,
			</if>
			<if test=":password != null">
				password=:password,
			</if>
			<if test=":email != null">
				email=:email,
			</if>
			<if test=":bio != null">
				bio=:bio
			</if>
		</set>
		where id=:id
	</update>
</query>
```

### bind
```xml
<?xml version="1.0"?>
<query>
	<select id="selectBlogsLike">
		<bind name="pattern" value="'%' + :blog.getTitle() + '%'" />
		SELECT * FROM BLOG
		WHERE title LIKE :pattern
	</select>
</query>
```