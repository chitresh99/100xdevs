//parse string is a global function unlike slice , spli 

const { parse } = require("path");

// This means it can be called from anywhere in the code

console.log(parseInt("42"));
console.log(parseInt("44px")); //here if you write gibberish at the beginning of the number it won't work
console.log(parseInt("44.3"));

console.log("---------------------")

//float can have decimal places 
console.log(parseFloat("44"));
console.log(parseFloat("33px"));
console.log(parseFloat("3"));