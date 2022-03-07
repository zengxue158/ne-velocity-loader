const context = require('./lib/context')
const Velocity = require('velocityjs')

let REPLACE_MAP = {
  '[链接]': 'url',
  '[图片链接]': 'imgsrc',
  '[3G图片]': 'imgsrc3g',
  '[标题]': 'title',
  '[3G标题]': 'mtitle',
  '[副标题]': 'stitle',
  '[摘要]': 'digest',
  '[3G标题]': 'mtitle',
  '[来源]': 'source',
  '[个人履历]': 'title',
  '[文章ID]': 'docid',
  '[新增字段1]':'新增字段1',
  '[新增字段2]':'新增字段2',
  '[新增字段3]':'新增字段3'
}

let REG = /\[[a-zA-Z0-9\u4e00-\u9fa5_]+\]/g;

function loadVelpcity (source) {
  let _source = source.replace(REG, function(key) {
    if (REPLACE_MAP[key]) {
      return "${one.get(\"" + REPLACE_MAP[key] + "\")}";
    } else {
      return key;
    }
  })
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' }
  _source = _source.replace(/&(lt|gt|nbsp|amp|quot);/ig, (all, t) => { return arrEntities[t] })
  let html = Velocity.render(_source, context)
  return html
}

module.exports = function(source) {
  let callback = this.async()
  let output = loadVelpcity(source)
  callback(null, output)
}
