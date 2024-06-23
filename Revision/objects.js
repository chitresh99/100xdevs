const people = [
    {
        firstname : "chitresh",
        secondname: "poojary",
        gender : "male"
    },

    {
        firstname : "vivek",
        secondname: "patil",
        gender : "male"
    },
   
    {
        firstname : "siddesh",
        secondname: "patil",
        gender : "male"
    },

]

for(let i = 0; i < people.length;i++){
    if(people[i]["gender"]=="male"){
      console.log(people[i]["firstname"]);
    }
}

