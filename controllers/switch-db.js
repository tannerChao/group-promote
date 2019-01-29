const config = require('../config')
const db = require(`../config/${config.database.DBTYPE}`)
module.exports = db