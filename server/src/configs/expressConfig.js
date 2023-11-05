const express = require('express')
const {auth} = require('../middlewares/authMiddleware.js')

function expressConfigurator(app) {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(auth)
}

module.exports = expressConfigurator