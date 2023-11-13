const router = require('express').Router()

const reviewManager = require('../managers/reviewsManager.js')

router.get('/', async (req, res) => {
    const reviews = await reviewManager.getAllWithoutDescription()

    setTimeout(()=> res.json(reviews), 1000)
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

router.get('/:reviewId', async (req, res) => {
    const reviewId = req.params.reviewId

    try {
        const review = await reviewManager.getOneDetails(reviewId)
        
        if(req.user?._id == review.owner) {
            review.isOwner = true
        } else {
            review.isOwner = false
        }

        res.status(201).json(review)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/:reviewId/like', async (req, res) => {
    const reviewId = req.params.reviewId
    const userId = req.user?._id
    try {
        if(userId) {
            await reviewManager.likeReview(reviewId, userId)
        }

        res.end()
    }catch(err) {
        res.status(400).json({
           message: err.message
        })
    }
})

router.get('/:reviewId/all-data', async (req, res) => {
    const reviewId = req.params.reviewId

    const userId = req.user?._id

    try {
        const reviewOwner = await reviewManager.getReviewOwner(reviewId)

        if (reviewOwner.owner == userId) {
            const review = await reviewManager.getOneAllData(reviewId)

            res.status(201).json(review)
        } else {
            res.status(400).json({
                message: 'You are not the owner'
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.put('/:reviewId', async (req, res) => {
    const reviewData = {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        summary: req.body.summary,
        description: req.body.description
    }
    const reviewId = req.params.reviewId

    const userId = req.user?._id

    try {
        const reviewOwner = await reviewManager.getReviewOwner(reviewId)

        if(reviewOwner.owner == userId) {
            const updatedReview = await reviewManager.updateReview(reviewData, reviewId)

            res.status(201).json(updatedReview)
        } else {
            res.status(400).json({
                message: 'You are not the owner'
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.delete('/:reviewId', async (req, res) => {
    const reviewId = req.params.reviewId
    
    const userId = req.user?._id

    try {
        const reviewOwner = await reviewManager.getReviewOwner(reviewId)

        if (reviewOwner.owner == userId) {
            await reviewManager.deleteReview(reviewId)

            res.status(200).end()
        } else {
            res.status(400).json({
                message: 'You are not the owner'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router