const router = require('express').Router()

const reviewManager = require('../managers/reviewsManager.js')

router.get('/', async (req, res) => {
    const reviews = await reviewManager.getAllWithoutDescription()

    res.json(reviews)
})

router.get('/last2', async (req, res) => {
    const last2Reviews = await reviewManager.getLast2()

    res.json(last2Reviews)
})

router.post('/', async (req, res) => {
    const reviewData = {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        summary: req.body.summary,
        description: req.body.description,
        owner: req.user._id
    }

    try {
        const review = await reviewManager.createReview(reviewData)

        res.status(201).json(review)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router