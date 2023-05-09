const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: '',
    password: '',
    database: 'nodemysql'
})

module.exports = pool
