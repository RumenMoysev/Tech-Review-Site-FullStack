const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdReviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Review'
        }
    ],
    likedReviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

const User = mongoose.model('User', userSchema)

module.exports = User