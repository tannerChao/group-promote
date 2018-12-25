module.exports = (data, code = 0, message = '', success = true) => {
    return {
        code,
        data: data,
        success,
        message
    }
}