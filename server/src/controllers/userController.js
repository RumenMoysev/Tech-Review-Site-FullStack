const router = require('express').Router()

const userManager = require('../managers/userManager.js')

router.post('/register', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const rePassword = req.body.repeatPassword

    try {
        const [user, authToken] = await userManager.register(userData, rePassword)

        res.json({
            authToken: authToken,
            email: user.email,
            username: user.username,
            userId: user._id
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/login', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    try {
        const [user, authToken] = await userManager.login(userData)

        res.json({
            authToken: authToken,
            email: user.email,
            username: user.username,
            userId: user._id
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router