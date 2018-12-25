
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.database.HOST);
mongoose.connection.on('connected', () => {
    console.log('链接成功')
})
mongoose.connection.on('error', () => {
    console.log('链接错误')
})
mongoose.connection.on('disconnected', () => {

})
module.exports = mongoose