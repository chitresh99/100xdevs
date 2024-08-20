import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
 name : {
    type : String,
    required : true,
 }
}, {timestamps:true})

//mongoose will store plural even if you make it plural in models
//making it singular and uppercase is a good practice

const Category = mongoose.model ("Category",categorySchema);

modules.export = {
    Category
}