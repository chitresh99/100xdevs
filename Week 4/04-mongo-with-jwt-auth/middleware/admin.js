const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../config"); 

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(" "); // making an array of [bearer, asadsasda (token)]
    const jwtToken = words[1]; //get the token from the array 
    const decodedvalue = jwt.verify(jwtToken,jwt_secret);
    if(decodedvalue.username){
        next();
    }else{
        res.status(403).json({
            message : "You are not authenticated"
        })
    }

    //get the token
}

module.exports = adminMiddleware;