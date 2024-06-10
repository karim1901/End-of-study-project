const  mongoose  = require('mongoose')
const Order = require('../models/orderModel')
const Product = require('../models/productModel')
const Customer = require('../models/customerModel')
const Client = require('../models/clientModel')
const User = require("../models/userModel")



const add_order = async(req,res)=>{

    try {
        const products = await Product.find({_id:{$in:req.body.product}})

        Client.create(req.body.client).then((result)=>{
            req.body.client = result
            console.log("created client .")
        }).catch((err)=>{
            console.log("No created client")
        })


        products.forEach((product)=>{

            req.body.product = product
            req.body.employee = product.employee._id
            Order.create(req.body).then(()=>{
                Product.updateOne({_id:product._id},{ $inc: { number_orders: 1 } }).then(()=>{
                    console.log("create order")
                    res.json({message:"create order"})
                })
            }).catch((err)=>{
                res.json({message:err.message})
            })
        })



    } catch (err) {
        res.json({message:err})
    }





}



const get_orders = async (req,res)=>{


    try {
        const orders = await Order.find({ marchent: req.params.id , status:req.params.status})
        .sort({ createdAt: -1 })
        .exec()
    
    
        res.json({
            orders:orders
        })
    
    } catch (error) {

        res.json({message:error})
    }

}


const get_orders_marchent = async(req,res)=>{
    try {
        const customers = await Order.find({ marchent: req.params.id },{client:1})
        .sort({ createdAt: -1 })
        .exec()
    
    
        res.json({
            customers:customers
        })
    
    } catch (error) {

        res.json({message:error})
    }
}

const get_orders_Employee = async (req,res)=>{

    try {
        const orders = await Order.find({ employee: req.params.id , status:req.params.status})
        .sort({ createdAt: -1 })
        .exec()

        res.json({
            orders:orders
        })
    
    } catch (error) {

        res.json({message:error})
    }

}




const numberOrders = async(req,res)=>{

    const nbrOrder1 = await Order.countDocuments({ marchent: req.params.id , status:"newOrder"})
    const nbrOrder2 = await Order.countDocuments({ marchent: req.params.id , status:"confirmed"})
    const nbrOrder3 = await Order.countDocuments({ marchent: req.params.id , status:"cancelling"})

    const nbrProducts = await Product.countDocuments({ marchent: req.params.id })

    res.json({data:{
        nbrNewOrder:nbrOrder1,
        nbrConfirmed:nbrOrder2,
        nbrCancelling : nbrOrder3,
        nbrProducts:nbrProducts
    }})

}

const update_status = async (req,res)=>{

    // console.log(req.body.status)

    Order.updateOne({_id:req.params.id},{status:req.body.status}).then(async(result)=>{
        
        
        if(req.body.status == "confirmed"){
    
            const order = await Order.findById(req.params.id)
            console.log(order.employee)
            await User.updateOne({_id:order.employee},{$inc:{number_confirmed:req.body.quantity}})

            Product.updateOne({_id:req.body.idPro},{ $inc: { number_confirmed: req.body.quantity , stock: -req.body.quantity  } }).then(()=>{
                console.log("updated order")
                res.json({message:"updated order"})
            }).catch((err)=>{
                res.json({message:err.message})
            })
        }else{
            res.json({message:"updated ok"})
        }
    }).catch((err)=>{
        console.log(" No updated order")
        res.json({message:err.message})
    })

}



const get_orders_by_customer = async(req,res)=>{
    try {
        const orders = await Order.find({ customer: req.params.id })
        .sort({ createdAt: -1 })
        .exec()
    
        res.json({
            orders:orders
        })
    
    } catch (error) {

        res.json({message:error.message})
    }
}




// const order_delivered = (req,res)=>{

// }






module.exports = {
    add_order,
    get_orders,
    numberOrders,
    update_status,
    get_orders_by_customer,
    get_orders_Employee,
    get_orders_marchent
}