const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(" "); // making an array of [bearer, asadsasda (token)]
    const jwtToken = words[1]; //get the token from the array 
    const decodedvalue = jwt.verify(jwtToken,jwt_secret);

    //username,type : "admin" | "user" //ideally
   
    // There is a difference between authentication and authorization

    if(decodedvalue.username){
        next();
    }else{
        res.status(403).json({
            message : "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;