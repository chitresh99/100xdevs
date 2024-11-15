const express = require('express');
const app = express();
app.use(express.json());

app.get('/',function(req,res){
    res.send('Hello world')
})

//creating routes
// app.post('/damnson',function(req,res){
// console.log('req.body');
// res.send({
//     mess:'2+2=4'
// })
// })

app.listen(3000);


