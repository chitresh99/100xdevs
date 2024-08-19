import mongoose from "mongoose";

const subTodoschema = new mongoose.Schema({
content: {
    type : String,
    required : true
},
complete : {
    type : boolean,
    default : false
},
creeatedby : {
type : mongoose.Schema.Types.ObjectId,
ref: 'User',
}
},{timestamps:true}
)

const subtodo = mongoose.model("Subtodo",subTodoschema)

module.exports = {
    subtodo
}