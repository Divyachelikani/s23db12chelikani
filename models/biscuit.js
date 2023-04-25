const mongoose = require("mongoose")

const biscuitSchema = mongoose.Schema({
    Name:  String ,
    FlavourType: String,
    Price: { type: Number, min: 0, max: 150 },
})

module.exports = mongoose.model("biscuit", biscuitSchema)
