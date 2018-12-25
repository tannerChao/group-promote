const Config = require('../config/config')
const Sql = require(`../${Config.database.DBTYPE}-sql/sql/user`)
const User = require('../models/user')

module.exports.getUser = async (info) => {
    const user = new User();
    let res = await Sql.select(info)
    console.log(user, res)
    return res
}