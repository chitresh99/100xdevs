const express = require("express")

const app = express();

const path = require('path');

const fs = require("fs");

app.use(express.json());

// fs.readFile("filename","utf-8",function(err,data){
//     console.log(data);
// })

// :filename is the route parameter in the route path.
// req.params.filename retrieves the value of this route parameter.

app.get('/files', function (req, res) {
    fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files);
    });
});


app.get('/file/:filename', function (req, res) {
    const filepath = path.join(__dirname, './files/', req.params.filename);

    fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        return res.status(404).send('File not found');
    }
    res.send(data);
    });
});

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});


module.exports = app;
app.listen(3000);


//http://localhost:3000/file/a.txt