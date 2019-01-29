const { size } = require('lodash')
const jsonwebtoken = require('jsonwebtoken')
const Config = require('../config')
const Sql = require(`../${Config.database.DBTYPE}-sql/sql/user`)
const User = require('../models/user')
const Errors = require('../lib/error')
const Success = require('../lib/succeed')
const { HAS_NO_LOGIN, HAS_NO_USER, USER_EXIST, USER_INFO_ERROR, AXIOS_SUCCESS } = require('../utils/const')

module.exports.getUser = async (info) => {
    const user = new User();
    let res = await Sql.select(info)
    console.log(user, res)
    return res
}

module.exports.register = async (info) => {
    const user = new User(info);
    user.signPassword = info.password
    let res = await Sql.getUser({ username: user.username })

    if (size(res) > 0) {
        return Errors(USER_EXIST, '当前用户名已存在')
    } else {
        let res1 = await Sql.addUser({ username: user.username, password: user.signPassword })

        if (size(res1) > 0) {
            return Success(AXIOS_SUCCESS, '')
        } else {
            console.log(res1)
        }
    }
}

module.exports.login = async info => {
    const user = new User(info);
    user.signPassword = info.password
    let res = await Sql.getUser({ username: user.username, password: user.signPassword })
    if (size(res) > 0) {
        const token = jsonwebtoken.sign({
            username: res[0].username,
            id: res[0].id
        }, Config.secret.sign, { expiresIn: '2h' });
        console.log(token)
        return Success(AXIOS_SUCCESS, {
            token
        })
    } else {
        return Errors(USER_INFO_ERROR, '用户名或密码错误')
    }
}