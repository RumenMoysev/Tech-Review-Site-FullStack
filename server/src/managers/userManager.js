const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwtPromise.js')
const SECRET = require('../configs/config.js')

const usernameLength = 5
const emailLength = 7
const passwordLength = 5

function validate(userData, rePassword) {
    if (userData.email.length < emailLength) {
        throw new Error(`Email should be at least ${emailLength} characters long.`)
    }

    if (userData.username) {
        if (userData.username.length < usernameLength) {
            throw new Error(`Username should be at least ${usernameLength} characters long.`)
        }
    }

    if (userData.password.length < passwordLength) {
        throw new Error(`Password should be at least ${passwordLength} characters long.`)
    }

    if (rePassword) {
        if (rePassword !== userData.password) {
            throw new Error('Passwords do not match')
        }
    }
}

exports.register = async (userData, rePassword) => {
    try {
        validate(userData, rePassword)

        userData.password = await bcrypt.hash(userData.password, 10)

        const user = await User.create(userData)

        const payload = {
            _id: user._id,
            email: user.email,
            username: user.username
        }

        const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'})
        return [payload, token]
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.login = async (userData) => {
    try {
        validate(userData)

        const user = await User.findOne({ email: userData.email })

        if (user) {
            const isValid = await bcrypt.compare(userData.password, user.password)

            if (!isValid) {
                throw new Error('Email or password do not match!')
            }

            const payload = {
                _id: user._id,
                email: user.email,
                username: user.username
            }

            const token = await jwt.sign(payload, SECRET)

            return [payload, token]
        } else {
            throw new Error('Email or password do not match!')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}