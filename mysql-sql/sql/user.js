const { forOwn, trimStart } = require('lodash');
const { query } = require('../config')
const TableName = 'user'

const getUser = info => {
    let values = '';
    forOwn(info, (value, key) => {
        values += `&&${key}='${value}'`
    })
    console.log(`select * from ${TableName} where ${trimStart(values, '&&')}`)
    return query(`select * from ${TableName} where ${trimStart(values, '&&')}`, info)
}

const addUser = (info) => {
    let values = '', keys = '';
    forOwn(info, (value, key) => {
        values += `,'${value}'`
        keys += `,${key}`
    })
    return query(`insert into ${TableName} (${trimStart(keys, ',')}) value(${trimStart(values, ',')})`, info)
}

module.exports = {
    getUser,
    addUser
}