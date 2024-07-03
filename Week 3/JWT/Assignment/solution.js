const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

/*The username and password are just inputs that you pass to the safeParse method to check if they conform 
to the schemas you defined using zod.*/

function signJwt(username, password) {
    
    const username_response = emailschema.safeParse(username);
    const password_response = passwordschema.safeParse(password);
    if(!username_response.success || !password_response.success){
        return null;
    }
    const signature  = jwt.sign({
        username,
    },jwtPassword)
    return signature;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

function verifyJwt(token){
    let ans = true;
    try{
        jwt.verify(token,jwtPassword);
    }catch(e){
        ans = false;
    }
    return ans;
}

const ans = signJwt("akasjxsoxj@gmail.com","ahsswix")
console.log(ans)

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrYXNqeHNveGpAZ21haWwuY29tIiwiaWF0IjoxNzE5OTM4ODU4fQ.8ioq5y1C8q3GJyDaschlsEKPzeZKyia--SlS8gccaa8"))

const real = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrYXNqeHNveGpAZ21haWwuY29tIiwiaWF0IjoxNzE5OTM5MDM4fQ.n18TWzhMEUGs0mkIwn2KbEcTNuimyNeivOVie6bchoE")
console.log(real);