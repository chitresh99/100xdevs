import {v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadoncloudinary = async (localfilepath) => {
try{

    //checking if local file path is there or not
 if(!localfilepath) return null

 //upload the file on cloudinary
 const response = await cloudinary.uploader.upload(localfilepath,{
    
    //type of resource we upload we set it to auto so it can detect itself
    resource_type : "auto"
 })
 //file has been uploaded successfully
 console.log("file upload is uploaded on cloudinary",response.url); //url after uploading
 return response
}catch(error){
 // removing file from our server
 fs.unlinkSync(localfilepath) //remove the locally saved temporary file as the upload operation got failed
 return null;
}
}

export {uploadoncloudinary}