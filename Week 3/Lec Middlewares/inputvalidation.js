const express = require("express");
const app = express();

app.use(express.json());

app.post("/healthcheckup",function(req,res){
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("you have "+kidneylength +" kidneys");
})

//GLOBAL CATCH
app.use(function(err,req,res,next){
res.json({
    msg:"sorry something is wrong with our servers"
})
})

app.listen(3000);