const express = require('express')
const app = express();

function isagemiddleware(req,res,next){
    const age = req.query.age;
    if(age>= 14){
        next();
    }else{
        res.status(411).json({
            msg:"sorry you are not the right age"
        })
    }
}

app.use(isagemiddleware); //one way to introduce middleware into each of the new routes

app.get("/ride2" , function(req,res){
res.json({
    msg:"you have succesfully ride the ride 2"
})
})

app.get("/ride1",function(req,res){
    res.json({
        msg:"you have succesfully ride the ride 1"
    })
    })

app.listen(3000)