/* eslint-disable quotes */
import mybatis3 from '../lib/library'
import { join } from 'path'

describe('parse xml, output query string', () => {
  beforeEach(() => {
    mybatis3.table('Board', join(__dirname, '/xml'), ['basic'])
  })

  test('select', async () => {
    const Board = mybatis3.table('Board')

    const data = await Board.getList()
    expect(data).toEqual('SELECT * FROM TBL_BOARD')
  })

  test('insert', async () => {
    const Board = mybatis3.table('Board')

    const params = {
      brdtitle: 'test board',
      brdmemo: 'test',
      brdwriter: 'james kim'
    }
    const data = await Board.insert(params)
    expect(data).toEqual(
      "INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE ) VALUES ('test board', 'test', 'james kim', NOW() )"
    )

    const params2 = { subject: 'test', user_id: 'pruge', user_name: 'james' }
    const data2 = await Board.insertBoard(params2)
    expect(data2).toEqual(
      "INSERT INTO posts(subject, user_id, user_name ) VALUES ('test', 'pruge', 'james' )"
    )
  })

  test('update', async () => {
    const Board = mybatis3.table('Board')

    const params = { brdtitle: 'test board', brdmemo: 'test', brdwriter: 'james kim' }
    const data = await Board.update(params)
    expect(data).toEqual(
      "UPDATE TBL_BOARD SET BRDTITLE='test board', BRDMEMO='test', BRDWRITER='james kim'"
    )
  })

  test('delete', async () => {
    const Board = mybatis3.table('Board')

    const params = { brdno: 1 }
    const data = await Board.delete(params)
    expect(data).toEqual('DELETE FROM TBL_BOARD WHERE id=1')
  })
})

describe('if, output query string', () => {
  beforeEach(() => {
    mybatis3.table('Board', join(__dirname, '/xml'), ['if.xml'])
  })

  test('if true', async () => {
    const Board = mybatis3.table('Board')

    const params = { brdtitle: 'test board', brdmemo: 'test', brdwriter: 'james kim' }
    const data = await Board.insert(params)
    // console.log(data)
    expect(data).toEqual(
      "INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE ) VALUES ('test board', 'test', 'james kim', NOW() ) ORDER BY created DESC TEST"
    )
  })

  test('if false', async () => {
    const Board = mybatis3.table('Board')

    const params = { brdtitle: 'test board', brdmemo: 'test', brdwriter: 'james kim', cnt: 10 }
    const data = await Board.insert(params)
    // console.log(data)
    expect(data).toEqual(
      "INSERT INTO TBL_BOARD(BRDTITLE, BRDMEMO, BRDWRITER, BRDDATE ) VALUES ('test board', 'test', 'james kim', NOW() ) TEST"
    )
  })
})

describe('choose when otherwise, output query string', () => {
  beforeEach(() => {
    mybatis3.table('Board', join(__dirname, '/xml'), ['choose-when-otherwise.xml'])
  })

  test('not match', async () => {
    const Board = mybatis3.table('Board')

    const params = {}
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM BLOG WHERE state = ‘ACTIVE’ AND featured = 1')
  })

  test('one match', async () => {
    const Board = mybatis3.table('Board')

    const params = { title: 'good job' }
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE state = ‘ACTIVE’ AND title like 'good job'")
  })

  test('two match', async () => {
    const Board = mybatis3.table('Board')

    const params = { title: 'good job', author: { name: 'pruge' } }
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE state = ‘ACTIVE’ AND title like 'good job'")
  })

  test('second match', async () => {
    const Board = mybatis3.table('Board')

    const params = { author: { name: 'pruge' } }
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE state = ‘ACTIVE’ AND author_name like 'pruge'")
  })
})

describe('trim where set, output query string', () => {
  beforeEach(() => {
    mybatis3.table('Board', join(__dirname, '/xml'), ['trim-where-set.xml'])
  })

  test('where, not match', async () => {
    const Board = mybatis3.table('Board')

    const params = {}
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM BLOG')
  })

  test('where, one match', async () => {
    const Board = mybatis3.table('Board')

    const params = { state: true }
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM BLOG WHERE state = true')
  })

  test('where, last one match', async () => {
    const Board = mybatis3.table('Board')

    const params = { author: { name: 'pruge' } }
    const data = await Board.getList(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE author_name like 'pruge'")
  })

  test('trim, not match', async () => {
    const Board = mybatis3.table('Board')

    const params = {}
    const data = await Board.getList2(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM BLOG')
  })

  test('trim, one match', async () => {
    const Board = mybatis3.table('Board')

    const params = { state: true }
    const data = await Board.getList2(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM BLOG WHERE state = true')
  })

  test('trim, last one match', async () => {
    const Board = mybatis3.table('Board')

    const params = { author: { name: 'pruge' } }
    const data = await Board.getList2(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE author_name like 'pruge'")
  })

  test('set, not match', async () => {
    const Board = mybatis3.table('Board')

    const params = { id: 3 }
    const data = await Board.updateAuthorIfNecessary(params)
    // console.log(data)
    expect(data).toEqual('update Author where id=3')
  })

  test('set, one match', async () => {
    const Board = mybatis3.table('Board')

    const params = { id: 3, email: 'pruge@gmail.com' }
    const data = await Board.updateAuthorIfNecessary(params)
    // console.log(data)
    expect(data).toEqual("update Author SET email='pruge@gmail.com' where id=3")
  })

  test('set, many match', async () => {
    const Board = mybatis3.table('Board')

    const params = { id: 3, email: 'pruge@gmail.com', bio: 'man' }
    const data = await Board.updateAuthorIfNecessary(params)
    console.log(data)
    expect(data).toEqual("update Author SET email='pruge@gmail.com', bio='man' where id=3")
  })
})

describe('foreach, output query string', () => {
  beforeEach(() => {
    mybatis3.table('Board', join(__dirname, '/xml'), ['foreach.xml'])
  })

  test('null array', async () => {
    const Board = mybatis3.table('Board')

    const params = {}
    const data = await Board.selectPostIn(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM POST P WHERE ID in')
  })

  test('array', async () => {
    const Board = mybatis3.table('Board')

    const params = { list: [1, 2, 3] }
    const data = await Board.selectPostIn(params)
    // console.log(data)
    expect(data).toEqual('SELECT * FROM POST P WHERE ID in ( 1,2,3 )')
  })
})

describe('bind, output query string', () => {
  beforeEach(() => {
    mybatis3.table('Board', join(__dirname, '/xml'), ['bind.xml'])
  })

  test('function', async () => {
    const Board = mybatis3.table('Board')

    const params = { blog: { getTitle: () => 'awesome' } }
    const data = await Board.selectBlogsLike(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE title LIKE '%awesome%'")
  })

  test('null', async () => {
    const Board = mybatis3.table('Board')

    const params = {}
    const data = await Board.selectBlogsLike(params)
    // console.log(data)
    expect(data).toEqual("SELECT * FROM BLOG WHERE title LIKE '%undefined%'")
  })
})
