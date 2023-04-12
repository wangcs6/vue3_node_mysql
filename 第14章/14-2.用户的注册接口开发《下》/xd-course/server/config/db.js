const mysql = require('mysql');

const db = mysql.createPool({
  host: '120.25.3.72',
  user: 'root',
  password: 'xdclass.net168',
  database: 'xd_course',
});

module.exports = db;

