import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongooseAggregatePaginate";

const videoSchema = new Schema({
videoFile :{
    type : String,//cloudinary url
    required : true
},
thumbnail :{
    type: String, //url
    required : true
},
title :{
type : String,
required : true
},
description:{
    type : String,
    required : true
},
duration :{ //we get the duration from the service
    type : Number,
    required: true
},
views :{
    type : Number,
    default : 0
},
isPublished :{
    type : Boolean,//this is a flag if this is available for public or not
    default : true
},
owner:{
type: Schema.Types.ObjectId,
ref: "User"
}
},{
    timestamps : true
})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)