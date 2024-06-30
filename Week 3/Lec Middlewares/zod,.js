const express = require("express");
const zod = require("zod");
const app = express();


const schema = zod.array(zod.number());

app.use(express.json());

app.post("/healthcheckup",function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    res.send({
        response
    })
})

//GLOBAL CATCH
// app.use(function(err,req,res,next){
// res.json({
//     msg:"sorry something is wrong with our servers"
// })
// })

app.listen(3000);