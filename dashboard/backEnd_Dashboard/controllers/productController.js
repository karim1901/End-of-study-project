
const Product = require('../models/productModel')
const User = require("../models/userModel")




const add_product = async(req,res)=>{
    // req.body.thumbnail = "http://localhost:8001/"+req.body.thumbnail

    

    const employee = await User.findById({_id:req.body.employee , role:"employee"})

    req.body.employee = employee

    Product.create(req.body).then(()=>{
        res.json({message:"created "})
    }).catch((err)=>{
        console.log(err.message)
        res.json({message:err.message})
    })
}


const get_products = (req,res)=>{
    Product.find({marchent:req.params.id}).sort({ createdAt: -1 }).then((data)=>{
        res.json({products:data})
    }).catch((err)=>{
        res.json({message:err.message})
    })
}


const update_product = (req,res)=>{
    // req.body.thumbnail = "http://localhost:8001/"+req.body.thumbnail

    // console.log("req",req)

    Product.updateOne({_id:req.params.id},req.body).then(()=>{
        res.json({message:"created "})
    }).catch((err)=>{
        res.json({message:err.message})
    })
}





const bestProduct = async (req, res) => {

    
    try {

        // const orderCounts = await Order.find({marchent:"662fd141f8f4fa9c41abaed3"}).aggregate([
        //     { $match: { status: "confirmed"    } }, 
        //     {
        //         $group: {
        //             _id: "$product",
        //             count: { $sum: 1 }
        //         }
        //     }
        // ])
    
        const orderCounts = await Product.find({marchent:req.params.id}).sort({number_orders : -1})


    
        res.json({ data:orderCounts} );
    } catch (error) {
        res.json({message:error.message})
    }


}






module.exports = {
    add_product,
    update_product,
    get_products,
    bestProduct,
}