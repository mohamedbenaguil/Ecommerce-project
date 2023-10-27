const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true} ,
    email: String,
    password: String,
    phone_Number: Number,
    role:String
})
module.exports = mongoose.model('user', userSchema)