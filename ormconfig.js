// import "reflect-metadata";
import { app } from 'electron';
import { makeDirs } from './app/lib';
import config from './app/config.json';
import User from './entity/users';

/**
 * Configuration for
 * SQL.js - https://github.com/kripken/sql.js
 * TypeORM - https://www.npmjs.com/package/typeorm
 */
const userHome = app.getPath('home');
const appHome = `${userHome}/${config.appName}/${process.env.NODE_ENV}/`;
const dbFile = 'local.db';
const dbPath = `${appHome}${dbFile}`;
// make dirs in case they don't exist
makeDirs(appHome, dbFile);

export default {
  type: 'sqljs',
  database: dbFile,
  location: dbPath,
  synchronize: true,
  autoSave: true,
  logging: true,
  entities: [User]
};
