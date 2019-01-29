const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
const config = require('../config')
const Errors = require('../lib/error')
const { TOKEN_JWT_FAIL } = require('../utils/const')

module.exports = () => async (ctx, next) => {
    const token = ctx.header.authorization
    try {
        let payload;
        if (token) {
            payload = await verify(token.split(' ')[1], config.secret.sign)
            try {
                ctx.status = 200
                ctx.user = {
                    username: payload.username,
                    id: payload.id
                }
            } catch (e) {
                console.log(e)
            }
        }
        await next()
    } catch (e) {
        if (e.status === 401) {
            ctx.status = 401;
            ctx.response.type = 'application/json'
            ctx.body = Errors(TOKEN_JWT_FAIL, '认证失败')
        } else {
            ctx.status = 404;
            ctx.response.type = 'application/json'
            ctx.body = Errors(TOKEN_JWT_FAIL, '认证失败')
        }
    }
}