const Customer = require('../models/customerModel')


const get_customer = (req,res)=>{
    Customer.find({marchent:req.params.id}).sort({ createdAt: -1 }).then((data)=>{
        res.json({customers : data})
    }).catch((err)=>{
        console.log(err)
        res.json({message:err})
    })
}


module.exports = {
    get_customer
}