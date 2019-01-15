const { forOwn, trimStart } = require('lodash');
const { query } = require('../config')
const TableName = 'user'

const getUser = (userName) => query(`select * from ${TableName} where username=${userName}`, userName)

const addUser = (info) => {
    let values = '', keys = '';
    forOwn(info, (value, key) => {
        values += `,${value}`
        keys += `,${key}`
    })
    return query(`insert into ${TableName} (${trimStart(keys, ',')}) value(${trimStart(values, ',')})`, info)
}

module.exports = {
    getUser,
    addUser
}