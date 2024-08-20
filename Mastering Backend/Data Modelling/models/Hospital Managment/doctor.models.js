import mongoose from "mongoose";

const hourschema = new mongoose.Schema ({
    noofhours :{
        type : Number,
        required : true
    }
})

const doctorschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary:{
        type : String,
        required:true
    },
    qualification:{
        type : String,
        required:true
    },
    experience :{
        type : Number,
        default : 0
    },
    worksinhospitals : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : hospitalrecord
        },
        hourschema
    ],

}, {timestamps:true});

const doctor = mongoose.Schema('doctor',doctorschema)

module.exports = {
    doctor
}