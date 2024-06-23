let student1 = "chitresh";
let student2 = "siddhi";
let student3 = "siddesh";

const studentarray = ["chitresh","siddhi","siddesh"];

console.log(studentarray[0]);
console.log(studentarray[1]);
console.log(studentarray[2]);


const ages = [18,19,20,21,22];
const numberofpeople = ages.length;

for (let i = 0 ; i < numberofpeople; i++){
  if(ages[i] % 2 == 0){
    console.log(ages[i])
  }
}

//ages.length -> returns the number of elements in the array
// %2 gives the remainder which is zero for the even number
// %2 gives the remainder 1 for the odd numbers

//.length is a predefined property in an array which returns the number of elements in an array
//.length is a predefined propery which returns the number of characters if its a string




