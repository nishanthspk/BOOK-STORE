const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendor",
        
    }
})

module.exports =mongoose.model('Seller',UserSchema)