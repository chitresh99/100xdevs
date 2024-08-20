import mongoose from "mongoose";

const medicalrecordschema = new mongoose.Schema({
    
}, {timestamps : true})

const medicalrecord = mongoose.model(
'MedicalRecord',
medicalrecordschema
);

module.exports = {
    medicalrecord
}