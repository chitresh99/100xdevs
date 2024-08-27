import multer from "multer";


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/temp') //file path
    },
    //name
    filename: function(req, file, cb) {
       cb(null,file.originalname) //we get the original name
    }
})

export const upload = multer({
    storage,
})