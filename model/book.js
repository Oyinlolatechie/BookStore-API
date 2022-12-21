const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema


const BookSchema = new Schema({
    "title": {
        type: String,
        required: true
    },

    "year": {
        type: Number,
        max: [2022, 'year must be less than or equal to 2022']
    },

    "isbn": {
        type: String,
        unique: true,
        required: true
    },

    "createdAt": {
        type: Date,
        default: Date.now()
    },

    "updatedAt": {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('books', BookSchema)