# Promises

What are promises ?

Promises are syntactical sugar that makes the code slightly more readble 

All async functions that we will write will be on top of js provided async function like settimeout and fs.readfile


While intialising a promise pass function as an argument the function needs to have an argument called resolve (you can name this anything)


```` javascript
var d = new Promise(function(resolve){

});

````


A promise can only have three states 

1) Pending 
2) Resolved 
3) Rejected

All async logic is put inside resolve

