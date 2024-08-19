import mongoose from "mongoose";

//sub todos are todo inside todos

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdby: {
        //to make a relation
        //special type and refrence
        type: mongoose.Schema.Types.ObjectId, //this is also a special type
        ref: "User" //should be the same name from the model
    },
    subTodo: [
        {
            //different models reference
            type : mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo',
        }
    ],
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema)

modules.export = {
    Todo
}