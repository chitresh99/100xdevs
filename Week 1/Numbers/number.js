//parse string is a global function unlike slice , split 

const { parse } = require("path");

// This means it can be called from anywhere in the code

console.log(parseInt("42"));
console.log(parseInt("44px")); //here if you write gibberish at the beginning of the number it won't work
console.log(parseInt("44.3"));

console.log("---------------------")

//float can have decimal places 
console.log(parseFloat("44.003"));
console.log(parseFloat("33px"));
console.log(parseFloat("3"));

function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");