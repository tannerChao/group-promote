'use strict'
const { get } = require('lodash');
const Signature = require(`../lib/signature`)

class User {

    constructor(info) {
        console.log(info, get(info, 'userName'))
        this.username = get(info, 'userName')                   //用户账号
        this.userpwd = get(info, 'password')                       //密码
        this.userage = get(info, 'password')
        this.signpassword = get(info, 'password')                     //年龄
    }

    get userPwd() {
        return this.userpwd;
    }

    set userPwd(info) {
        this.userpwd = get(info, 'password')
    }

    get signPassword() {
        return this.signpassword;
    }

    set signPassword(password) {
        this.signpassword = Signature.md5(`${password}--Ainboys`)
    }

}
module.exports = User