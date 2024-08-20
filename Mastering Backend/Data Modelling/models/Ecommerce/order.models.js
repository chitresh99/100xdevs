import mongoose from "mongoose";

//we can pass schema inside the array

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderschema = new mongoose.schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required : true
    },
    status : {
        type : String,
        //enum is choices
        enum: ["Pending","Cancelled","Delivered"],
        default: "Pending"
    }
}, { timestamps: true })

const order = mongoose.model("Order", orderschema);

modules.export = {
    order
}