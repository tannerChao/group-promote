/**
 * 用户信息
 */
const User = require('../schema/user')
const Error = require('../../lib/error')
const Succeed = require('../../lib/succeed')

module.exports.insert = (info) => {
    const user = new User(info);
    user.save((err, res) => {

        if (err) {
            return Error(err)
        } else {
            return Succeed('')
        }

    });

}
module.exports.select = (info) => {
    return User.find(info, (err, res) => {
        if (err) {
            return Error(err)
        } else {
            return Succeed(res)
        }
    })
}