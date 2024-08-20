import mongoose from "mongoose";

const hospitalschema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    addressline1:{
        type : String,
        required : true,
    },
    addressline2 :{
        type : String,
        required : true,
    },
    city :{
        type : String,
        required : true,
    },
    pincode :{
        type : Number,
        default : 0,
        required :true
    },
    specailizedIn:[
        {
          type : String
        },
    ],
}, {timestamps : true})

const hospitalrecord = mongoose.model(
'hospitalrecord',
hospitalschema
);

module.exports = {
    hospitalrecord
}