const sqlite3 = require('sqlite3');

// Connect to SQLite database
const db = new sqlite3.Database("./dua_main.sqlite");

module.exports = db;