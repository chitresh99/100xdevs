// const let 
// let -> if the value is changing
// const -> if it is not

// let a = 5;
// const b = 6;
// console.log();

// async function hello(){

//    const hi = await fetch ()
//    const re = await hi

// }

const array = [1,2,3,4]
console.log(array)

const obj = [
    {
        firstname: "hello",
        secondname : "bye"
    },
    {
        firstname: "raf",
        secondname : "taar"
    }
]

const damn = obj[0];
console.log(damn);

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

const damnson = JSON.stringify(user);
console.log(damnson);

// when ever we send our data somewhere we stringfy our data and then send it