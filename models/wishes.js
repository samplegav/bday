const mongoose = require("mongoose")
const Schema = mongoose.Schema

const wishSchema = new Schema({
    wish: {
        type: String,
        required: true
    }
})

const Wish = mongoose.model('Wish', wishSchema)

module.exports = Wish