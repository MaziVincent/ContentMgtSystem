

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    roles:{
        User:{
            type: String,
            default: "User"
        },
        Student:String,
        Admin: String

    },
    status:{type:String, default:"Active"},
    refreshToken: String,

    searchString:String
    
},{timestamps : true});

module.exports = mongoose.model('User', userSchema)