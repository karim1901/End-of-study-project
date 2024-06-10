

const User = require('../models/userModel')

const bcrypt = require('bcrypt')


const add_employee = async (req,res)=>{

    const password =  await bcrypt.hash(req.body.Password,12)

    
    const data = {
        firstName:req.body.FirstName,
        lastName:req.body.LastName,
        phone:req.body.Phone,
        email:req.body.AdressMail,
        role:"employee",
        userName:req.body.UserName,
        password:password,
        code:req.body.Password,
        marchent:req.body.marchent
    }

    User.create(data).then(()=>{
        res.json({message:"created user suc"})
    }).catch((err)=>{
        console.log(err.message)
        res.json({message:err.message})
    })
}



const get_employees = (req,res)=>{
    User.find({role:"employee" , marchent:req.params.id }).sort({ createdAt: -1 }).then((result)=>{
        res.json({employees:result})
    }).catch((err)=>{
        res.json({message:err.message})
    })
}



const update_employee = (req,res)=>{
    const data = {
        firstName:req.body.FirstName,
        lastName:req.body.LastName,
        phone:req.body.Phone,
        email:req.body.AdressMail,
        role:"employee",
        userName:req.body.UserName,
        password:req.body.Password,
        marchent:req.body.marchent
    }
    User.updateOne({_id:req.params.id},data).then(()=>{
        res.json({message:"updated user suc"})
    }).catch((err)=>{
        console.log(err.message)
        res.json({message:err.message})
    })
}




const delete_employee = (req,res)=>{
    User.deleteOne({_id:req.params.id}).then(()=>{
        res.json({message:"deleted user suc"})
    }).catch((err)=>{
        console.log(err.message)
        res.json({message:err.message})
    })
}


const bestEmployee = async(req,res)=>{
    try {

    
        const orderCounts = await User.find({marchent:req.params.id}).sort({number_confirmed : -1})


    
        res.json({ employees:orderCounts} );
    } catch (error) {
        res.json({message:error.message})
    }

}


module.exports = {
    add_employee,
    get_employees,
    update_employee,
    delete_employee,
    bestEmployee
}