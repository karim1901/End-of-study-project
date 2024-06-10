const express = require('express')
const dotenv = require('dotenv')
const connectDB  = require('./config/connecteDB')

const productRoute = require('./routes/productRoute') 
const cartRoute = require('./routes/cartRoute')
const homeRoute = require('./routes/homeRoute')


const cors  = require('cors')

const app = express()



dotenv.config({path:"config.env"})

connectDB()



app.use(express.json())
app.use(cors())

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on http://localhost:${process.env.PORT}`)
})


app.use('/product',productRoute)
app.use("/cart",cartRoute)
app.use("/home",homeRoute)