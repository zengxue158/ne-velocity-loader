let tools = {}
let methods = {
  BeijingtTimeZone: 'String',
  changePicSize: 'String',
  commentCheckedCount: 'Number',
  commentCount: 'Number',
  commentNum: 'Number',
  commentNumIncludingCombined: 'Number',
  commentPCount: 'Number',
  cutImg: 'String',
  cutMixTitle: 'String',
  cutOneTitle: 'String',
  cutString: 'String',
  cutTags: 'String',
  cutTitle: 'String',
  cutHtmlString: 'String',
  cyclical: 'String',
  cyclicald: 'String',
  cyclicalm: 'String',
  d2i: 'Number',
  decodeString: 'String',
  diggCount: 'Number',
  docidFromURL: 'String',
  encodeString: 'String',
  filterKeyword: 'String',
  formatLong: 'String',
  getAllRealContent: 'String',
  getArticleBoard: 'String',
  getBody: 'String',
  getBrief: 'String',
  getBuloid: 'String',
  getCindexProperty: 'String',
  getCommentBBSUrl: 'String',
  getDate: 'String',
  getDateAfter: 'String',
  getDaynum: 'Number',
  getDigest: 'String',
  getDiggCount: 'Number',
  getdomain: 'String',
  getFirstPic: 'String',
  getGMTimeZone: 'String',
  getIntValue: 'Number',
  getJoinCount: 'Number',
  getKeyString: 'String',
  getLength: 'Number',
  getLocalname: 'String',
  getLongValue: 'Number',
  getMobileUrl: 'String',
  getNongli: 'String',
  getPhotoBigImgsrc: 'String',
  getProperty: 'String',
  getRealContentJson: 'String',
  getReplacedBody: 'String',
  getSource: 'String',
  getTime: 'String',
  getTopicCount: 'Number',
  getWebConent: 'String',
  getWeekday: 'String',
  getYasoUrl: 'String',
  icon: 'String',
  join: 'String',
  LondonTimeZone: 'String',
  parse: 'String',
  ParseTime: 'String',
  parseTimeToMillisecond: 'Number',
  parseTimeToSecond: 'Number',
  plus: 'Number',
  replUrlByShort: 'String',
  ruship: 'String',
  setImageForYaso: 'String',
  urlencode: 'String'
};

Object.keys(methods).forEach(function(name) {
  var type = methods[name];
  return tools[name] = function(arg) {
    console.log(name, type);
    if (type === 'Number') {
      return 1;
    } else {
      return arg || '';
    }
  };
});

tools.split = function(str, reg) {
  return str.split(reg);
};

tools.cutTitle = (str, len) => {
  return str.substring(0, len)
}

tools.IndexOf = function(str, test) {
  return str.indexOf(test);
};

tools.replaceAll = function(str, test, result) {
  return str.replace(new RegExp(test, "g"), result);
};

tools.stripTags = function(str) {
  return str.replace(/<.*?>/g, '');
};

tools.createMap = function() {
  return {};
};

tools.isFine = function(arg) {
  return !!arg;
};

tools.subString = function(arg, start, end) {
  return arg.substring(start, end);
};

tools.getFirstPic = function(arg) {
  return 'http://img4.cache.netease.com/stock/2012/10/30/2012103010122251732.jpg';
};

module.exports = tools;
