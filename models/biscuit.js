const mongoose = require("mongoose")

const biscuitSchema = mongoose.Schema({
    Name:  {
        type:String,
    minlength:[4,'itemname']
    },
    FlavourType:{
        type :String,
    maxlength:[6,'flavour']
    },
    Price: { 
        type: Number, 
        min: 0, 
        max: 150 
    },
})

module.exports = mongoose.model("biscuit", biscuitSchema)
