const Store = require('../models/storesModel')



const getStore = (req,res)=>{
    // console.log(req.params.id)

    Store.findOne({marchent:req.params.id}).then(result =>{
        // console.log(result)
        res.json({store:result})
    }).catch(err=>{
        res.json({message:err.message})
        console.log(err.message)
    })
}


const getStores = (req,res)=>{

    Store.find({}).then(result =>{
        // console.log(result)
        res.json({stores:result})
    })
}

const updateStore = (req,res)=>{
    // console.log(req.params.id)

    Store.updateOne({_id:req.params.id},req.body).then(()=>{
        res.json({message:"updated store"})
    }).catch((err)=>{
        res.json({message:err.message})
    })
}


module.exports = {
    getStore,
    getStores,updateStore
}