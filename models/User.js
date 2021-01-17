const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type: String, required:true, minlenght:3, maxlenght:50},
    email:{type: String, required:true, minlenght:3, maxlenght:120},
    password:{type: String, required:true, minlenght:3, maxlenght:200},
    admin:{type: Boolean, default:false},
    createdAt:{type: Date , default:Date.now}
});

module.exports = mongoose.model('User',userSchema)