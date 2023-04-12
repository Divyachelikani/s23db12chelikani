const mongoose = require("mongoose")
const biscuitSchema = mongoose.Schema({
    Name: String,
    FlavourType: String,
    Price: Number
})
module.exports = mongoose.model("biscuit",
biscuitSchema)