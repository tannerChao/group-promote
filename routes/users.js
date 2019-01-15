const router = require('koa-router')()
const config = require('../config/config')
const user = require('../services/user')
router.prefix('/methods/user')

router.post('/login', async (ctx, next) => {
    let res = await user.getUser({ 'username': 'Tracy McGrady' });
    console.log(res, '------')
    ctx.response.type = 'application/json'
    ctx.body = res
})

router.post('/exit', async (ctx, next) => {
    let res = await user.getUser({ 'username': 'Tracy McGrady' });
    console.log(res, '------')
    ctx.response.type = 'application/json'
    ctx.body = res
})

router.post('/getKey', async (ctx, next) => {
    let res = await user.getUser({ 'username': 'Tracy McGrady' });
    console.log(res, '------')
    ctx.response.type = 'application/json'
    ctx.body = res
})

router.post('/register', async (ctx, next) => {
    let res = await user.register(ctx.request.body);
    console.log(res)
    ctx.response.type = 'application/json'
    ctx.body = res
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router
