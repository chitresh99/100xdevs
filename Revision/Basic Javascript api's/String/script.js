// Split Slice Trim 

//Slice
const ind = "chitresh";
console.log(ind.slice(0,5));


//Split :- split of words happen on the basis of delimeter 
//delimeter could be ' , ' or a letter etc

const hi = "hi,my name is chitresh";
const words = hi.split(",");
console.log(words);

// Trim 

// trim let's us trim out the space in the beginning and the end of the string
// one commmon example is a a website like if we are entering an email
// then this trim function helps us to trim out the space at the beginning and end 
// if there is any

const trimmer = "     chitresh poojary    ";
console.log(trimmer.trim());