const jwt = require('../lib/jwtPromise.js')
const SECRET = require('../configs/config.js')

exports.auth = async (req, res, next ) => {
    const token = req.header('X-Authorization')

    if(!token) {
        next()
    } else {
        try {
            const decodedToken = await jwt.verify(token, SECRET)

            res.user = decodedToken
            next()
        } catch (error) {
            res.status(401).json({
                message: 'You are not authorized!'
            })
        }
    }
}