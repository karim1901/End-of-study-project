const mongoose = require('mongoose')

const {Schema} = mongoose


const clientSchema = new Schema({
    fullName:{
        type:String,
        required:[true,"name is required"],
        minLength:[3,"name less 3"],
    },
    phone:{
        type:Number,
        required:[true,"phone is required"],
    },
    adress:{
        type:String,
        required:[true,"adress is required"],
    },
    city:{
        type:String,
        required:[true,"city is required"],
    }
})



const Client = mongoose.model('client',clientSchema)

module.exports = Client