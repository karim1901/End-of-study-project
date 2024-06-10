
const mongoose = require('mongoose')


const Schema = mongoose.Schema


const customerSchema = new Schema({


    fullName:{
        type:String,
        required:[true , "full name is required"],
        minLength:[3, "The Full name lesser than 3 letters"],
        maxLength:[50 , "The name more than 50 letters"]
    },
    phone:{
        type:String,
        required:[true,"phone is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    city:{
        type:String,
        required:[true,"city is required"]
    },

    marchent:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:[true,"marchent is required"]
    }


})



const Customer = mongoose.model('customer',customerSchema)


module.exports = Customer