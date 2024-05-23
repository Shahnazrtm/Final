const mongoose = require("mongoose")

const prodSchema = mongoose.Schema({
	name: String,
	image: String,
    price:Number
})

module.exports = mongoose.model("Product", prodSchema)
