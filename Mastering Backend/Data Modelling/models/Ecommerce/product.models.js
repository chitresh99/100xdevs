import mongoose from "mongoose";


//we shouldn't include images in a database because it's not a good idea
//we store image url's while the actual image is stored in some third pary service

const productschema = new mongoose.schema({
    description: {
        required: true,
        type: String
    },
    name: {
        type: String,
        required: true
    },
    productimage: {
        type: String
        // required : true
    },
    price: {
       type : Number,
       default : 0
    },
    stock : {
       type : Number,
       default : 0
    },
    category : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Category",
      required : true,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true })

const Product = mongoose.model("Product",productschema)

module.exports = {
    Product
}