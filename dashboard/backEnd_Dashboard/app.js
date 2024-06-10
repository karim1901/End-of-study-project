const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

dotenv.config({path:"config.env"})

const app = express()

const connectDB = require('./config/connecteDB')
const userRoute = require('./routes/userRoute')
const employeeRoute = require('./routes/employeeRoute')
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')
const customerRoute   = require('./routes/customerRoute')
const storeRoute = require('./routes/storeRoute')
const orderEmployee = require('./routes/orderEmployee')





connectDB()

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use(express.static(path.join(__dirname, 'images')));


app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on http://localhost:${process.env.PORT}`)
})


app.use(userRoute)
app.use("/employee",employeeRoute)
app.use("/product",productRoute)
app.use("/order",orderRoute)
app.use('/customer',customerRoute)
app.use("/store",storeRoute)
app.use("/orderEmployee",orderEmployee)