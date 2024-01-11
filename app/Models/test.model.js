const mongoose = require("mongoose")
const Test = new mongoose.Schema({
    name: {
        type: String,
    }
})
exports.module = mongoose.model('test', Test)