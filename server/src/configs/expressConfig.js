const express = require('express')

function expressConfigurator(app) {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
}

module.exports = expressConfigurator