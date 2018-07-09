## SQL.js and TypeORM notes

```js
sql.js = {
  supportedDataTypes: [
    'int',
    'integer',
    'tinyint',
    'smallint',
    'mediumint',
    'bigint',
    'unsigned big int',
    'int2',
    'int8',
    'integer',
    'character',
    'varchar',
    'varying character',
    'nchar',
    'native character',
    'nvarchar',
    'text',
    'clob',
    'text',
    'blob',
    'real',
    'double',
    'double precision',
    'float',
    'real',
    'numeric',
    'decimal',
    'boolean',
    'date',
    'time',
    'datetime',
  ],
  withLengthColumnTypes: [
    'character',
    'varchar',
    'varying character',
    'nchar',
    'native character',
    'nvarchar',
    'text',
    'blob',
    'clob',
  ],
  spatialTypes: [],
  withPrecisionColumnTypes: [],
  withScaleColumnTypes: [],
  mappedDataTypes: {
    createDate: 'datetime',
    createDateDefault: 'datetime(\'now\')',
    updateDate: 'datetime',
    updateDateDefault: 'datetime(\'now\')',
    version: 'integer',
    treeLevel: 'integer',
    migrationId: 'integer',
    migrationName: 'varchar',
    migrationTimestamp: 'bigint',
    cacheId: 'int',
    cacheIdentifier: 'varchar',
    cacheTime: 'bigint',
    cacheDuration: 'int',
    cacheQuery: 'text',
    cacheResult: 'text',
  },
}
```