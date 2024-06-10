const mongoose = require("mongoose")

const {Schema} = mongoose 


const StoreSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        maxLength:[20,"name more than 20 characters"],
        minLength:[3,"name less than 3 characters"]
    },
    
    description:{
        type:String,
        // required:[true,"description is required"],
        minlength:[3,"descripotion less than 3 letters" ],
        maxLength:[100,"description more than 100 letters"]
    },

    followors:{
        type:Number,
        default:0
    },
    marchent:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        require:[true,"marchnet required"]
    },

    profile:{type:String},
    background:{type:String}


},{timestamps:true})



const Store = mongoose.model('store',StoreSchema)


module.exports = Store