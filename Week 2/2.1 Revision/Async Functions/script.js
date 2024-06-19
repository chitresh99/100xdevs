// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// console.log("End");

const fs = require('fs');

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
})


console.log("hi there 1");

setTimeout(() => {

},1000);

