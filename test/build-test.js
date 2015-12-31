
var alasql= require("alasql");
var db = require("../index.js!./TEST_TABLE.sql");
var assert = require("assert");


describe("Naive test",() => {
  it("Table",() => {
    alasql.databases.alasql = db;
    assert.deepEqual(alasql("SELECT * FROM TEST_TABLE"),[{X:1,Y:"A"}]);
  })
});