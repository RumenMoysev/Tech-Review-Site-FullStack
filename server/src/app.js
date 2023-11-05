const express = require('express')
const routes = require('./routes.js')

const app = express()

const SERVER_PORT = 3030

const expressConfigurator = require('./configs/expressConfig.js')
const setCORS = require('./middlewares/corsMiddleware.js')
const dbConnect = require('./configs/dbConfig.js')

dbConnect()
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log(`Db crashed with ${err}`))

expressConfigurator(app)
setCORS(app)

app.use(routes)

app.listen(SERVER_PORT, () => console.log(`REST server is listening on port: ${SERVER_PORT}`))