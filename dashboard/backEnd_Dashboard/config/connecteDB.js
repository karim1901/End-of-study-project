

const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config({path:"config.env"})





const connectDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/store')
    .then(()=>{
        console.log('connect db ')
    })
    .catch((err)=>{
        console.log('connect db fail :',err)
    })
}


module.exports = connectDB