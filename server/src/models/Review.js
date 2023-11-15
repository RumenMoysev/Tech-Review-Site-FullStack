const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAtTime: {
        type: String,
        required: true
    },
    updatedAtTime: {
        type: String
    },
    likes: [
        {
            type: mongoose.Types.ObjectId,
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review