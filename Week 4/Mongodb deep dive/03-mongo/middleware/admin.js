//get the admin model to check if the admin exists in the admin database
const {admin, Admin} = require("../db/index")


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    //the user who was calling this admin middleware
    //if that username and password exits in the database 
    // go to the next middleware which is create courses


    const username = req.headers.username;
    const password = req.headers.password
    
    //this logic checks if the user exitss
     Admin.findOne({
         username : username,
         password : password
     })
    .then(function(value){ //if they do exist
        if(value){
            next(); //passing the control to the next middleware
        }else{
            res.status(403).json({
                msg : "user doesn't exist"
            })
        }
    })
}

module.exports = adminMiddleware;