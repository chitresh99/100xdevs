const express = require("express");
const app = express();

function usermiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "chitresh" || password != "pass") {
        return res.status(403).json({
            "msg": "something is wrong with inputs"
        });
    }
    else {
        next();
    }
};

function kidneyidmiddleware(req,res,next){

    const kidneyid = req.query.kidneyid;

if(kidneyid != 1 && kidneyid != 2){
    return res.status(403).json({
        "msg":"something is wrong with inputs"
    })
}
else{
    next();
}
}

app.get("/healthcheck",usermiddleware,kidneyidmiddleware,function(req,res){
    res.send("you are healthy");
})

app.listen(3000);