module.exports = async (ctx, next) => {
    try {
        await next();
        if (ctx.response.status === 404 && !ctx.response.body && ctx.method === 'GET') ctx.throw(404);
    } catch (e) {
        let status = parseInt(e.status)
        // 默认错误信息为 error 对象上携带的 message
        const message = e.message

        // 对 status 进行处理，指定错误页面文件名 
        if (status === 404) {
            try {
                // 指定视图目录
                nunjucks.configure(folder ? folder : __dirname)
                const data = await nunjucks.render(filePath, {
                    env: env, // 指定当前环境参数
                    status: e.status || e.message, // 如果错误信息中没有 status，就显示为 message
                    error: e.message, // 错误信息
                    stack: e.stack // 错误的堆栈信息
                })
                // 赋值给响应体
                ctx.status = status
                ctx.body = data
            } catch (e) {
                // 如果中间件存在错误异常，直接抛出信息，由其他中间件处理
                ctx.throw(500, `错误页渲染失败:${e.message}`)
            }

        }
    }
}