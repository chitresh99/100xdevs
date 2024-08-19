import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    username : {
        type : String,
        required : true, // this means that the field should be there
        unique : true, //for the field to be unique
        lowercase : true // for everything to be lowercase
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password:{
        type : String,
        required : true
    }
},{timestamps:true})

const User = mongoose.model("User",Userschema)

module.exports = {
User
}