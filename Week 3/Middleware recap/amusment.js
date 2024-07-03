const express = require('express');
const app = express();

app.use(express.json())

function isoldenough(age){
    if(age >= 14){
        return true;
    }else{
        return false;
    }
}

app.get('/ride1',function(req,res){
    if(isoldenough(req.query.age)){
        res.json({
            msg:"you have succesfully riden the ride 1"
        })
    }
    else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }
})

app.listen(3000)