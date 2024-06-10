const mongoose = require('mongoose')

const {Schema} = mongoose

const productSchema = new Schema({
    title:{
        type:String,
        required : [true,"title is Requierd"],
        minlength:[3,"title less than 3 letters"],
        maxLength:[20,"title more than 20 letters"]
    },
    description:{
        type:String,
        required:[true,"description is required"],
        minlength:[3,"descripotion less than 3 letters" ],
        maxLength:[100,"description more than 100 letters"]
    },
    category:{
        type:String,
        required : [true,"category is Requierd"],
        minlength:[3,"category less than 3 letters"],
        maxLength:[20,"category more than 20 letters"]
    },
    stock : {
        type:Number,
        required:[true,"quantity is Required"],
        min: [0, "Quantity must be greater than 0"]
    },

    pricePurchase:{
        type:Number,
        // required:[true,"price Purchase is Required"],
        min: [0, "price Purchase must be greater than 0"]
    },
    pricetaxes:{
        type:Number,
        // required:[true,"price Purchase is Required"],
        min: [0, "price Purchase must be greater than 0"]
    },

    price:{
        type:Number,
        // required:[true,"price Sele is Required"],
        min: [0, "price Sele must be greater than 0"]
    },

    thumbnail:{
        type:String,
        required:[true,"image is required"]
    },

    reviews: {
        type: [{
            type: Number,
            default: 0
        },{
            type: Number,
            default: 0
        }],
        default: [0, 0]
    },

    marchent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,"marchent is required"]
    },

    employee:{
        type:Object,
        required:[true,"employee is required"]
    },

    number_orders:{
        type:Number,
        default: 0
    },

    number_confirmed:{
        type:Number,
        default: 0
    },



    // comments: {
    //     type: [
    //         {
    //             Name: {
    //                 type: String,
    //                 required: [true, "Name is required for each comment"],
    //                 minlength: [3, "Name must be at least 3 characters long"],
    //                 maxlength: [20, "Name cannot be longer than 20 characters"]
    //             },
    //             comment: {
    //                 type: String,
    //                 required: [true, "Comment is required for each comment"],
    //                 minlength: [3, "Comment must be at least 3 characters long"],
    //                 maxlength: [100, "Comment cannot be longer than 100 characters"]
    //             }
    //         }
    //     ]
    // }
    



},{timestamps:true})




const Product = mongoose.model('product',productSchema)


module.exports  = Product