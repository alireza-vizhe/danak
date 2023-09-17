const mongoose = require("mongoose");

const Projects = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Projects", Projects);