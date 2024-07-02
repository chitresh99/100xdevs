const mongoose = require("mongoose");
const express = require("express")
const app = express();

mongoose.connect("mongodb+srv://chitresh:CHIR2588%7C@learning.lnvqqbh.mongodb.net/userappnew?retryWrites=true&w=majority&appName=Learning")


const user = mongoose.model('Users',{
    name : String,
    email : String,
    password : String
})

app.use(express.json())

app.post('/signup',async function(req,res){
const username = req.body.username;
const password = req.body.password;

//if username exits

const exisitinguser = await user.findOne({email:username});
if(exisitinguser){
    return res.status(400).send("username already exists");
}

const user = new UserActivation({
    name :name,
    email :username,
    password:password
})

user.save();
res.json({
    "msg":"user created successfully"
})
})

app.listen(3000)