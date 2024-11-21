const jwt = require('jsonwebtoken');

const getjwttoken = (userId) =>{
    return jwt.sign({userId:userId},process.env.JSON_SECRET,{expiresIn:'1 day'});

}

module.exports=getjwttoken;