const mongoose = require('mongoose')


const {Schema} = mongoose


const orderSchema  = new Schema({

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        // required:[true,"customer is required"]
    },
    client:{
        type:{},
        required:[true,"client is required"]
    },
    marchent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,"marchent is required"]
    },
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,"employee is required"]
    },

    product:[{
        type:Object,
        required:[true,"product is required"]
    }],
    
    quantity:{
        type:Number,
        required:[true,"quantity is required"]
    },
    status:{
        type:String,
        enum: ["newOrder", "confirmed", "cancelling", "delivered"],
        default: "newOrder"
    }

},{timestamps:true})



const Order = mongoose.model('order',orderSchema)



module.exports = Order