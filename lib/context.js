const mocking = require('./mocking');
const tools = require('./mockTools');

let MOCK_VALUS = {
  docid: 'F55F8RD30011819H',
  topicid: '0025986V',
  title: '文章标题标题标题标题',
  ptime: '2013-8-16',
  url: 'https://mobile.163.com/20/0212/03/F55F8RD30011819H.html',
  digest: '文章摘要摘要摘要摘要',
  imgsrc: 'http://img4.cache.netease.com/stock/2012/10/30/2012103010122251732.jpg',
  source: '文章来源',
  userid: '用户id',
  nickname: '用户昵称',
  stitle: '副标题',
  lspri: 60,
  search: '文章的全文搜索关键字',
  modelmode: '文章类型',
  // imgsrc3gtype: 1,
  // 排行
  daynum: '20',
  boardId: 'news2_bbs',
  docId: 'F5IS6VLJ0001899O',
  rCount: '2227',
  score: '38697',
  tCount: '1888',
  threadId: '1017735966',
  year: '2020',
  // getRTTopPV
  site: '文章所在频道的URL',
  num: '访问次数',
  color: 'red', // green
  percent: '50',
  '新增字段1':'新增字段111',
  '新增字段2':'新增字段222',
  '新增字段3':'新增字段333'
}

let monkObj = {
  get (key) {
    return MOCK_VALUS[key] || key;
  }
}

let cache = {}

let context = {
  tag: {
    getList (str_args) {
      let arg, args, get, _i, _len, _ref
      if (cache[str_args]) {
        return cache[str_args];
      }
      if (str_args) {
        args = {};
        _ref = str_args.split(';');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          arg = _ref[_i];
          arg = arg.split('=');
          if (arg[0]) {
            args[arg[0]] = arg[1];
          }
        }

        return mocking.array(mocking.object({
          title: mocking.string(mocking.int(3, parseInt(args.titlelength) || 3), '标题'),
          digest: mocking.string(mocking.int(3, parseInt(args.digestlength) || 10), '摘要'),
          get () {
            return function(key) {
              return this[key] || MOCK_VALUS[key] || key;
            }
          }
        }), parseInt(args.listnum) || 2)();
      }
      return [monkObj, monkObj, monkObj];
    },
    getChannelTopList () {
      return mocking.array(mocking.object({
        num: 0,
        title: mocking.string(mocking.int(10, 20), '文章'),
        get () {
          return function(key) {
            return this[key] || MOCK_VALUS[key] || '';
          };
        }
      }), arguments[arguments.length - 1] || 2)();
    },
    getTopPV () {
      return mocking.array(mocking.object({
        num: 0,
        title: mocking.string(mocking.int(10, 20), '标题'),
        get () {
          return function(key) {
            return this[key] || MOCK_VALUS[key] || '';
          };
        }
      }), arguments[arguments.length - 1] || 2)();
    },
    getBbsRank (text, num, num2) {
      return mocking.array(mocking.object({
        rcount: 0,
        title: mocking.string(mocking.int(10, 20), '新闻'),
        get () {
          return function(key) {
            return this[key] || MOCK_VALUS[key] || '';
          };
        }
      }), num2 | num || 2)();
    },
    getListOrderbyHits () {
      return mocking.array(mocking.object({
        num: 0,
        title: mocking.string(mocking.int(10, 20), '标题'),
        get () {
          return function(key) {
            return this[key] || MOCK_VALUS[key] || '';
          };
        }
      }), arguments[arguments.length - 1] || 2)();
    },
    getAllSiteTopList () {
      return mocking.array(mocking.object({
        num: 0,
        title: mocking.string(mocking.int(10, 20), '标题'),
        get () {
          return function(key) {
            return this[key] || MOCK_VALUS[key] || '';
          };
        }
      }), arguments[arguments.length - 1] || 2)();
    },
    getRTTopPV (str_args) {
      let arg, args, get, _i, _len, _ref
      if (cache[str_args]) {
        return cache[str_args];
      }
      if (str_args) {
        args = {};
        _ref = str_args.split(';');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          arg = _ref[_i];
          arg = arg.split('=');
          if (arg[0]) {
            args[arg[0]] = arg[1];
          }
        }
        return mocking.array(mocking.object({
          title: mocking.string(mocking.int(3, 20), '标题'),
          get () {
            return function(key) {
              return this[key] || MOCK_VALUS[key] || key;
            }
          }
        }), parseInt(args.listnum) || 2)();
      }
      return [monkObj, monkObj, monkObj];
    },
    getTopPVByHour () {
      return mocking.array(mocking.object({
        num: 0,
        title: mocking.string(mocking.int(10, 20), '标题'),
        get () {
          return function(key) {
            return this[key] || MOCK_VALUS[key] || '';
          };
        }
      }), arguments[arguments.length - 1] || 2)();
    }
  },
  pdtag: {
    getPriceInternal () {
      return {
        get () {
          return [monkObj, monkObj, monkObj];
        }
      };
    },
    getAutoSeriesInfoByID (arg) {
      return {
        name: arg
      };
    }
  },
  tools: tools,
  pages: 5,
  thisPageNo: 2,
  thepage: '#',
  bar: ['', '', '#', '', '']
}

module.exports = context
