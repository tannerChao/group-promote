const Crypto = require('crypto')

module.exports = {
    md5: (info) => {
        const cryptos = Crypto.createHash('md5')
        cryptos.update(info);
        return cryptos.digest('hex')
    }
}