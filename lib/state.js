const { HAS_NO_LOGIN, HAS_NO_USER, USER_EXIST, USER_INFO_ERROR, AXIOS_SUCCESS, TOKEN_JWT_FAIL } = require('../utils/const')
module.exports = {
    [HAS_NO_USER]: 1000,
    [HAS_NO_LOGIN]: 1001,
    [USER_INFO_ERROR]: 1002,
    [USER_EXIST]: 1003,
    [AXIOS_SUCCESS]: 0,
    [TOKEN_JWT_FAIL]: 1099
}