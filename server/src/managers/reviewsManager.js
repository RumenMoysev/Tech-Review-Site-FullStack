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

exports.getLast2 = () => {
    const reviews = Review.find()

    const last2 = []

    for(let i = review.length; i > reviews.length-2; i--) {
        last2.push(reviews[i])
    }

    return last2
}

exports.create = (reviewData) => {
    try {
        validate(reviewData)

        return Review.create(reviewData)
    } catch (error) {
        throw new Error(error.message)
    }
}