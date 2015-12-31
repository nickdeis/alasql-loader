var alasql = require("alasql");



module.exports = function(content) {
  var self = this;
  self.cacheable && self.cacheable();
  alasql(content);
  var value = JSON.stringify(alasql.databases.alasql);
  self.value = value;
  return `module.exports=JSON.parse('${value}')`;
};