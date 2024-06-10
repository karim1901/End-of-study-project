
const { compare, hash } = require('bcrypt')
const User = require('../models/userModel')
const { sign, verify } = require('jsonwebtoken')


const dotenv = require('dotenv')
const Store = require('../models/storesModel')

dotenv.config({path:"config.env"})




const signUp = async (req,res)=>{

    req.body.password = await hash(req.body.password,12)

    User.create(req.body).then((result)=>{
        console.log(result)
        if(req.body.role == "marchent"){
            Store.create({name:req.body.storeName,marchent:result._id}).then(()=>{
                res.status(201).json({message:"Create successfully . "})
            })
        }else{
            res.status(201).json({message:"Create successfully . "})
        }
    }).catch((err)=>{
        res.json({message:"Create Failed !",error:err.message})
    })

}


const login = async(req,res)=>{

    try {

        
        const user = await User.findOne({userName:req.body.userName})

        if(!user){
            return res.json({ message: "User not found." });
        }


        const verifyPassword = await compare(req.body.password, user.password)

        if(!verifyPassword){
            return res.json({ message: "Invalid password." })
        }

        const token = sign({user:user},process.env.SECRET_KEY,{expiresIn:"7d"})


        res.json({ user: user, token: token })

    } catch (err) {
        res.json({ error: err.message });
    }

}

const validyToken = async (req,res)=>{
    // res.json({message:"ok"})

    try {
        token = req.headers.auth

        if(!token){
            return res.json({message:'token not found'  , status:false})
        }

        const decoded = verify(token,process.env.SECRET_KEY)


        const user = await User.findById({_id:decoded.user._id})

        if(!user){
            return res.status(401).json({message:"Invalide Token" , status:false})
        }

        res.status(200).json({user:user , status:true})
        

    } catch (error) {
        res.json({message:error.message , status:false })
    }
}


module.exports = {
    signUp,
    login,
    validyToken
}