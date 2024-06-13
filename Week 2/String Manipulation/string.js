function getlength(str){
    console.log("Original string :",str);
    console.log("Length :",str.length); 
}
getlength("helloworld");

// or 

const chit = "hi"; 
console.log(chit.length);


//here index means at what point is this second word starting
function findindexof(str,target){
    console.log("original string :",str);
    console.log("Index:",str.indexOf(target));
}
findindexof("hello world","hi");


//to get the index of the last word we use 'lastIndexof'
function findindexoflast(str,target){
    console.log("original string :",str);
    console.log("Index:",str.lastIndexOf(target));
}
findindexoflast("hello world world world","world");

// Learnings till now :- Length , indexOf , lastIndexOf 

//.slice doesn't include the last index which here is 5
function getsliceof(str,start,end){
    console.log("Orginial string :",str);
    console.log("Index :",str.slice(start,end));
}
getsliceof("Hello world",0,5);

const ans = "chitresh";
console.log(ans.slice(0,5))

//There was one more it was called substring which is now depriciated it actually had the length at the end unlike the slice will it give you
// 5 characters

const value = "chitresh";
console.log(value.substr(2,5));

const value2 = "chitresh";
console.log(value2.slice(2,5));

//string replace 

const str = "hello world";
console.log(str.replace("world","javascript"));

//split

const hi = "hi my name is chitresh";
const words = hi.split(" ");
console.log(words);

// split of words happen on the basis of delimeter 
//delimeter could be ' , ' or a letter etc

//trim
// trim let's us trim out the space in the beginning and the end of the string
// one commmon example is a a website like if we are entering an email
// then this trim function helps us to trim out the space at the beginning and end 
// if there is any

const trimmer = "     chitresh poojary    ";
console.log(trimmer.trim());

const firstname = "chitresh";
console.log(firstname.toUpperCase());

const lastname = "POOJARY";
console.log(lastname.toLowerCase());

//split slice and trim are the good once

