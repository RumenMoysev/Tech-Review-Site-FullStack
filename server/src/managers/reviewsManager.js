const Review = require('../models/Review.js')

const titleLength = 6
const summaryLength = 10
const descriptionLength = 20

function validate(reviewData) {
    if(reviewData.title.length < titleLength) {
        throw new Error(`Title should be at least ${titleLength} characters long`)
    }
    if (!reviewData.imageUrl.startsWith('http://') && !reviewData.imageUrl.startsWith('https://')) {
        throw new Error('Please provie a valid image URL')
    }
    if(reviewData.summary.length < summaryLength) {
        throw new Error(`Summary should be at least ${summaryLength} characters long`)
    }
    if(reviewData.description.length < descriptionLength) {
        throw new Error(`Description should be at least ${descriptionLength} characters long`)
    }
}

exports.getAll = () => Review.find()

exports.getAllWithoutDescription = () => Review.find({}, { title: 1, imageUrl: 1, summary: 1})

exports.getLast2 = async () => Review.find({}, { title: 1, imageUrl: 1, summary: 1 }).sort({$natural: -1}).limit(2)

exports.getOneDetails = (reviewId) => {
    const review = Review.findById(reviewId, { title: 1, imageUrl: 1, description: 1 })

    if(!review) {
        throw new Error('Review not found')
    }

    return review
}

exports.createReview = (reviewData) => {
    try {
        validate(reviewData)

        return Review.create(reviewData)
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.updateReview = (reviewData, reviewId) => {
    try {
        validate(reviewData)

        return Review.findByIdAndUpdate(reviewId, reviewData)
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.deleteReview = (reviewId) => {
    const review = Review.findByIdAndDelete(reviewId)

    if (!review) {
        throw new Error('Review not found')
    }

    return review
}