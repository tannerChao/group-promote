const config = require('../config/config')
const db = require(`../config/${config.database.DBTYPE}`)
module.exports = db