import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//we wrote {Schema} so we didn't have to write new mongoose.Schema

const userSchema = new Schema(
{
 username : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim: true,
    index: true //to make a field search-able , optimized way , but it's expensive
 },
 email:{
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim: true,
 },
 fullname : {
    type:String,
    required : true,
    trim : true,
    index: true
 },
 avatar : {
    type: String, //cloudinary url
    required : true,
 },
 coverImage : {
    type : String,
 },
 watchHistory :[
    {
        type : Schema.Types.ObjectId,
        ref : " Video"
    }
],
password:{
    type : String,
    required : [
        true,'Password is required'
    ]
},
refreshToken:{
    type : String
}
},{
    timestamps:true
}
)

userSchema.pre("save",async function (next) {
    
    //to run just when we send the password field

    //if not modified we made a negative check we could have also done a positive check
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10) //what we want to hash and rounds(salts or hash round)
    next()
}) //functionality and callback , we cannot use arrow function because context is needed

//making custom methods

userSchema.methods.isPassworCorrect = async function (password) {
   return await bcrypt.compare(password,this.password) //normal password and encrypted password
}

userSchema.methods.generateAccessToken = function(){
    
    return jwt.sign({
        //payload
        _id: this._id,
        email: this.email,
        username:this.username,
        fullname:this.fullname
    },process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
    
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        //payload
        _id: this._id,
    },process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const User = mongoose.model("User",userSchema);
