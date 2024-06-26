const express = require("express")

const app = express();

const fs = require("fs");

app.use(express.json());

// fs.readFile("filename","utf-8",function(err,data){
//     console.log(data);
// })

// :filename is the route parameter in the route path.
// req.params.filename retrieves the value of this route parameter.

app.get("/files/:filename",function(req,res){
const name = req.params.filename;
console.log(name);
fs.readFile(name,"utf-8",function(err,data){
    res.json({
     data
    });
})
})

app.listen(3000);