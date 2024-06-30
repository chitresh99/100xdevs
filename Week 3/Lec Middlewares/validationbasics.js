const zod = require("zod");

function validateInput(obj){
    
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"chitreshpoojary660@gmail.com",
    password:"hello1234"
})