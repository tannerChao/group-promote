const { get } = require('lodash')

const state = require('./state')
const { AXIOS_SUCCESS } = require('../utils/const')
module.exports = (type = AXIOS_SUCCESS, data, message = '', success = true) => {
    return {
        code: get(state, type),
        data: data,
        success,
        message
    }
}