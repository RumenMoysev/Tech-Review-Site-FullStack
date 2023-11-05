const jwt = require('jsonwebtoken')

const sign = (payload, secret, options) => {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, result) => {
            if (err) {
                return reject(result)
            }

            return resolve(result)
        })
    })

    return promise
}

const verify = (token, secret, options) => {
    const promise = new Promise((resolve, reject) => {
        jwt.verify(token, secret, options, (err, result) => {
            if (err) {
                return reject(result)
            }

            return resolve(result)
        })
    })

    return promise
}

module.exports = {
    sign,
    verify
}