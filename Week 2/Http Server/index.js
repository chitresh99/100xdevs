const express = require("express");
const app = express() //intializes instance of express 
const port = 3000

app.use(express.json()); //middleware to parse json bodies


// get and res
app.get("/routehandler", function (req, res) {
  res.json({
    firstname: "chitresh",
    age: 21
  })
});

app.get('/', function (req, res) {
  res.send('<b> Hi </b>')
})

app.post('/conversations', function (req, res) {
  console.log(req.body)
  res.send({
    mes:"2+2 = 4"
  })
})

app.listen(port);
//res means responds

//Assignment
//create a todo app that let's userss todos on the server
