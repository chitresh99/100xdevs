const currentDate = new Date();

console.log(currentDate.getMonth() + 1); //+1 for month since it's zero indexed
console.log(currentDate.getFullYear());

// Get time is the important one here

console.log("Time in miliseconds since 1970",currentDate.getTime());

function calculatesum(){
      let a = 0;
    for(let i = 0; i < 10000000;i++){
        a = a + 1;
    }
    return a;

}  //a counts how many times the loop runs and returns that count, which is 10 million.
//i is the loop variable 


calculatesum();

const beforedate = new Date();
const beforeTimeinms = beforedate.getTime();
 
const afterdate = new Date ();
const afterTimeinms = afterdate.getTime();

console.log(afterTimeinms - beforeTimeinms);