const { get } = require('lodash')

const state = require('./state')
module.exports = (type, info) => {
    return {
        code: get(state, type),
        data: '',
        success: false,
        message: info
    }
}