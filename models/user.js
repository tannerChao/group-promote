'use strict'
const { get } = require('lodash');
const Config = require('../config/config')
const Sql = require(`../${Config.database.DBTYPE}-sql/sql/user`)

class User {

    constructor(info) {
        console.log(info, get(info, 'userName'))
        this.username = get(info, 'userName')                   //用户账号
        this.userpwd = get(info, 'password')                       //密码
        this.userage = get(info, 'password')                        //年龄
    }

    async getUser() {
        let res = await Sql.getUser(this.username)
        return res
    }

    async addUser() {
        let res = await Sql.addUser({ username: this.username, password: this.userpwd })
        return res
    }

}
module.exports = User