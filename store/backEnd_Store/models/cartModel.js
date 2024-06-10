const mongoose = require('mongoose')

const Schema = mongoose.Schema


const cartSchema = new Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,"customer is required"]
    },

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:[true,"product is required"]
    },
    
    quantity:{
        type:Number,
        required:[true,"quantity is required"]
    }
})


const Cart = mongoose.model('cart', cartSchema)



module.exports = Cart