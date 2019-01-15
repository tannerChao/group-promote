const mysql = require('mysql');
const config = require('../../config/config');

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
})

const query = (sql, values) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
        if (err) {
            resolve(err)
        } else {
            connection.query(sql, values, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
                connection.release()
            })
        }
    })
})
module.exports = {
    query
}