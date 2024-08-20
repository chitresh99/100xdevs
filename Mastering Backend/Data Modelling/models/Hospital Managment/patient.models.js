import mongoose from "mongoose";

const patientrecordschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    diagnosedwith :{
        type : String,
        required : true
    },
    address : {
      type : String,
      required : true
    },
    age : {
    type : Number,
    required : true
    },
    bloodgroup :{
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ["M","F","O"],
        required : true
    },
    admittedin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "hospitalrecord"
    },
}, {timestamps : true})

const patientrecord = mongoose.model(
'patientrecord',
patientrecordschema
);

module.exports = {
    patientrecord
}