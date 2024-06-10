

const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config({path:"config.env"})





const connectDB = ()=>{
    // mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.vlysowh.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0`)
    mongoose.connect('mongodb://localhost:27017/store')
    .then(()=>{
        console.log('connect db ')
    })
    .catch((err)=>{
        console.log('connect db fail :',err)
    })
}


module.exports = connectDB