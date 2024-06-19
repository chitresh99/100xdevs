const fs = require("fs");


// this helps you read a file

//in parameters we have the path of the file and the encoding of the file
fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("hi there"); // this will run first since file fetch is an sync program

// only one thread can execute at a time

//callback only make sense in an async function