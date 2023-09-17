const mongoose = require("mongoose");

const Post = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Post", Post);