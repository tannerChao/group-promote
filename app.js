const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(views(__dirname + '/statics/group-promote-static', {
    extension: 'html'
}))

// app.use(async (ctx, next) => {
//     ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
//     ctx.set('Access-Control-Allow-Credentials', true);
//     await next();
// });

// logger
app.use(async (ctx, next) => {
    // console.log(ctx)
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// app.use(async (ctx, next) => {
//     if (ctx.method === 'OPTIONS') {
//         ctx.body = '';
//     }
//     await next();
// });
// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(require('koa-static')(__dirname + '/statics/group-promote-static'))

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
