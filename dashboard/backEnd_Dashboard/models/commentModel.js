const mongoose = require('mongoose')


const {Schema} = mongoose

const commentSchema = new Schema({
    Name: {
        type: String,
        required: [true, "Name is required for each comment"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [20, "Name cannot be longer than 20 characters"]
    },
    comment: {
        type: String,
        required: [true, "Comment is required for each comment"],
        minlength: [3, "Comment must be at least 3 characters long"],
        maxlength: [100, "Comment cannot be longer than 100 characters"]
    }
},{timestamps:true})



const Comment = mongoose.model('commment',commentSchema)


module.exports = Comment 