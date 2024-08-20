import mongoose from "mongoose";

//timestamps gives us two fields created at and updated at

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })


//name and base
const User = mongoose.model("User", userschema);

modules.export = {
    User
}