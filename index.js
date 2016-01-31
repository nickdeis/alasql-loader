var alasql = require("alasql");
var loaderUtils = require("loader-utils");


var req = /require\(['"`].*['"`]\)[;\n]?/gi;
var imp = /load\(['"`].*['"`]\)[;\n]?/gi;


function parseRequires(content){
  return content.match(req);
};

function removeRequires(content){
  return content.replace(req,"");
};

function parseLoads(content){
  return content.match(imp);
};

//load("./TEST_LOAD.sql") => require("${whoiam}?emit=false!./TEST_LOAD.sql")
function transformLoad(stmt,whoiam){
  return stmt.replace(/(load)\(['"`](.*)['"`]\)[;\n]?/i,($1,$2,$3) => (`require("${whoiam}?emit=false!${$3}")`));
};

function removeLoads(content){
  return content.replace(imp,"");
}

function whoami(self){
  return self.loaders[self.loaderIndex].path
}

module.exports = function(content) {
  var self = this;
  //self.cacheable && self.cacheable();
  alasql(content);
  var value = JSON.stringify(alasql.databases.alasql);
  self.value = value;
  return `
  module.exports=JSON.parse('${value}')
  `;
};


