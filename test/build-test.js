
var alasql= require("alasql");
var assert = require("assert");
var db = require("../index.js!./TEST_TABLE.sql");

describe("Naive test",() => {
  it("Table",() => {

    alasql.databases.alasql = db;
    assert.deepEqual(alasql("SELECT * FROM TEST_TABLE"),[{X:1,Y:"A"}]);
    assert.deepEqual(alasql("SELECT * FROM TEST_LOAD"),[{X:1,Y:"B"}]);
  });
});