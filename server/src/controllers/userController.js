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
            username: user.username,
            email: user.email,
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
            username: user.username,
            email: user.email,
            userId: user._id
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.get('/logout', (req, res) => {
    res.end()
})

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId

    try {
        const userData = await userManager.getUserData(userId)
        
        res.json({
            username: userData.username,
            email: userData.email
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router