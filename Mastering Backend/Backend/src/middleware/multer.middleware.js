import multer from "multer";

//configuration
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/temp') //file path
    },
    //name
    filename: function(req, file, cb) {
       cb(null,file.originalname) //we get the original name
    }
})

//upload is the route
export const upload = multer({
    storage, //function call that returns a middlware
})

//File Configuration: The configuration using multer.diskStorage({}).
// Function: The multer.diskStorage({}) that returns the configuration.
// Middleware: The export const upload = multer({ storage }).