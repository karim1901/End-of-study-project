const  mongoose  = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({
    firstName:{
        type:String,
        required:[true,"first name required"],
        minLength:[3,"first name less than 3 letters"],
        maxLength:[20,"first name more than 20 letters"],
    },
    lastName:{
        type:String,
        required:[true,"last name required"],
        minLength:[3,"last name less than 3 letters"],
        maxLength:[20,"last name more than 20 letters"],
    },
    userName:{
        type:String,
        required:[true,"username required"],
        minLength:[6,"username less than 6 letters"],
        maxLength:[20,"username more than 20 letters"],
    },
    phone:{
        type:String,
        required:[true,"Number phone is required"],

        validate: {
            validator: function(v) {
                
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! Please enter a 10-digit phone number without spaces or special characters.`
        }
    },

    role:{
        type:String,
        enum: ['admin', 'marchent','employee','customer'], 
        required: true
    },

    code:{
        type:String,
    },

    city: {
        type: String,
        minlength: [3, "City name must be at least 3 characters long"],
        maxlength: [30, "City name more 30 characters long"]
    },
    

    address: {
        type: String,
        // required: [true, "Address is required"],
        minlength: [5, "Address must be at least 5 characters long"],
        maxlength: [100, "Address cannot be longer than 100 characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique:[true,"email is unique"],
        // validate: {
        //     validator: function(v) {
        //         // Regular expression for email validation
        //         return /\S+@\S+\.\S+/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid email address! Please enter a valid email address.`
        // },
        
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be at least 8 characters long"],
        // maxLength: [50, "Password cannot be longer than 50 characters"],
        // validate: {
        //     validator: function(v) {
        //         return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid password! Please ensure your password contains at least 8 characters including one uppercase letter, one lowercase letter, and one digit.`
        // }
    },
    

    marchent:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },

    number_confirmed:{
        type:Number,
        default: 0
    },


},{timestamps:true})



const User = mongoose.model('user',userSchema)

module.exports = User