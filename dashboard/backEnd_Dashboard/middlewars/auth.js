
const User = require('../models/userModel')
const dotenv = require("dotenv")

dotenv.config({path:"config.env"})


const auth = async(req,res,next)=>{
    try {
        token = req.headers.auth

        if(!token){
            return res.status(401).json({message:'token not found'})
        }

        const decoded = verify(token,process.env.SECRET_KEY)

        const user = await User.findById({_id:decoded._id})

        if(!user){
            return res.status(401).json({message:"Invalide Token"})
        }

        next()
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = auth