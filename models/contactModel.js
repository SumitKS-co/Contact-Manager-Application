const mongoose = require("mongoose");

const constSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref:"User"
    },
    name :{
        type:String,
        required : [true,"Please add the contact name"]
    },
    email :{
        type:String,
        required : [true,"Please add the contact email address"]
    },
    phone :{
        type:Number,
        required : [true,"Please add the contact phone number"]
    },

})

module.exports = mongoose.model("Contact",constSchema);