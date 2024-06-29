const express = require("express");
const app = express();

app.use(express.json());

app.get('/healthcheck', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "chitresh" || password != "pass") {
        res.status(400).json({"msg": "Something is wrong with inputs"})
        return
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg": "Something is wrong with your input"})
        return
    }

    res.json({"msg": "Your kidney is fine"});
});

app.listen(3000);
