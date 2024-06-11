//Like arrays objects are also a way to aggregate data together

//unlike arrays objects are unordered

//objects can be more nested

// const users = {
//     firstname:"chitresh",
//     gender: "male"
// }

// console.log(users["gender"])

// this is read as array of objects
const allusers = [{
  firstname : "chitresh",
 gender : "male",
//  metadata:{
//     age: 21,
//     address: "lok"  
//  }
},

{
 firstname : "siddhi",
 gender : "female"
},

{
    firstname : "siddesh",
    gender : "male"
}

]

for(let i = 0; i < allusers.length; i++){
    //all users of i of gender
    if(allusers[i]["gender"]=="male"){
        //print the users first name
      console.log(allusers[i]["firstname"]);
    }
}