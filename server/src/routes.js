const router = require('express').Router()
const userController = require('./controllers/userController.js')
const reviewsController = require('./controllers/reviewsController.js')

router.use('/users', userController)
router.use('/data/reviews', reviewsController)

module.exports = router