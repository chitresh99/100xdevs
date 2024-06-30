const express =  require("express");
const app = express();
const zod = require("zod");

app.use(express.json())

function validateInput(obj){
    
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    return response;
}

app.post('/login',function(req,res){
    const response = validateInput(req.body)

    if (!response.success) {
        res.json({
            msg: "your inputs are invalid",
            errors: response.error.errors // Adding error details 
        });
        return;
    }

    res.json({
        msg: "your inputs are valid"
    });
})

app.listen(3000)