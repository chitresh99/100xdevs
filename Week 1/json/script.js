//json -> javascript object notation

// const { json } = require("stream/consumers");

const user = {
    firstname :"chitresh",
    age :24,
    gender:"male"
}

console.log(user["firstname"])
 

// passing a string to get an object 
//passing an object to get a string

const users = '{"firstname":"chitresh","age":24,"gender":"male"}';

console.log(users)


//two functionsS
//json.parse
//json.stringfy

const nvm = JSON.parse(users);

console.log(nvm.firstname);
console.log(user["gender"]);

const damn = JSON.stringify(user);
console.log(damn);

// when ever we send our data somewhere we stringfy our data and then send it