const Cart = require("../models/cartModel")
const Product = require("../models/productModel")



const addTOCart = async (req,res)=>{


    const cart = await Cart.find({customer:req.body.customer,product:req.body.product})


    // console.log(req.body)
    if(!cart.length){

        Cart.create(req.body).then(()=>{
            res.json({message:"created cart"})
        }).catch((err)=>{
            res.json({message:err.message})
        })

    }else{

        req.body.quantity = parseInt(cart[0].quantity) + parseInt(req.body.quantity)

        Cart.updateOne({_id:cart[0]._id},req.body).then(()=>{
            res.json({message:"updated cart"})
        }).catch((err)=>{
            res.json({message:err.message})
        })
    }


}


const get_cart = (req,res)=>{
    // console.log(req.params)
    Cart.find({customer:req.params.id}).populate('product').then((data)=>{
        res.json({cart:data})
    }).catch((err)=>{
        res.json({message:err})
    })
}


const deleteFormCart = (req,res)=>{
    Cart.deleteOne({_id:req.params.id}).then(()=>{
        res.json({message:"deleted form cart"})
    })
}

module.exports = {
    addTOCart,
    get_cart,
    deleteFormCart
}