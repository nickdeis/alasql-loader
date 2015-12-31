# alasql-loader

Compiles sql from [alasql](https://github.com/agershun/alasql) and emits a JSON of the db.
Currently is extremely naive (see Why?) and not nearly complete.

## Usage

```sql
CREATE TABLE TEST_TABLE (
  X INT,
  Y TEXT
);
INSERT INTO TEST_TABLE VALUES (1,'A');
```

```javascript
  var db = require("alasql-loader!./TEST_TABLE.sql");
  alasql.databases.alasql = db;
  assert.deepEqual(alasql("SELECT * FROM TEST_TABLE"),[{X:1,Y:"A"}]);
```

## License

MIT

## Why?

* Compile time checking is useful
* To see if I can cut out the clientside parser

## Limitations/TODO

* SELECT statements don't work