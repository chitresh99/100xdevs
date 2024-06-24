//creating an http server
//express
//node default library => no

const express = require("express");

const app = express();

//functionality :-

function hello(n){
let ans = 0;
for(let i = 0; i <=n ;i++){
ans = ans + i
}
return ans;
}

app.get('/',function(req,res){
    const n = req.query.n; //query parameters
    const ans = hello(n);
    res.send("hi there " +  ans);
})
// "/damn" :- is the route

app.get('/damn',function(req,res){
    res.send("hola at your boy")
})

app.listen(3000);