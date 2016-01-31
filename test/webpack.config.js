var IgnorePlugin = require("webpack").IgnorePlugin;
module.exports = {
  entry: './build-test.js',
  output: {
    filename: 'test.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins:[new IgnorePlugin(/^fs$/),
  new IgnorePlugin(/cptable/),
  new IgnorePlugin(/jszip/),
  new IgnorePlugin(/xlsx/),
  new IgnorePlugin(/xls/),
  new IgnorePlugin(/cpexcel/),
  new IgnorePlugin(/^path$/)
],
target:"node"
};