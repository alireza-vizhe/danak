const mongoose = require("mongoose");

const Carousel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
    }
})

module.exports = mongoose.model("Carousel", Carousel)