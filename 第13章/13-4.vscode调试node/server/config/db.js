const mysql = require('mysql');

const db = mysql.createPool({
  host: '121.0.0.1',
  user: 'root',
  password: '',
  database: 'xd_course',
});

module.exports = db;

