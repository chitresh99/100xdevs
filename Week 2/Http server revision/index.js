const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/routehandler', function (req, res) {
    res.json({
        firstname: "chitresh",
        rollno: "51",
    })
})

app.post('/nocap', function (req, res) {
    console.log(req.headers)
    res.send({
        mes: "2+2 = 4"
    })
})

app.get('/hi', function (req, res) {
    res.send('<b> Hi </b>')
})

app.get('/raftaar',function(req,res){
    res.send("Hi this is raftaar")
})

app.post('/conversations', function (req, res) {
    console.log(req.body)
    res.send({
        mes: "2+2 = 4"
    })
})

app.get("/checking",function(req,res){
   res.send("no cap");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port);