// var users = [{
//     name:chitresh,
//     metadata:{   //metadata is an object in itselfs
//     profilepicture : "",
//     pronouns:"he/us",
//     address:{

//     }
//     }
// }]

const express = require("express");
const app = express();

//very important line for post request
app.use(express.json()); 


const users = [{
    name : "chitresh",
    kidneys:[{
        healthy:false
    }]
}];

// Problem Statement :- 

//get :- users can check how many kidneys they have and their health
//post :- users can add a new kidney
//put :- users can replace the kidney and make it healthu
//delete :- users can remove a kidney

app.get('/damn',function(req,res){
    res.send("hola at your boy");
})

// Query parameters in get request
app.get('/',function(req,res){
    const chitreshkidneys = users[0].kidneys;
    const numberofkidneys = chitreshkidneys.length;


    let numberofhealthykidneys = 0; 
    //.length -> returns no of characters in a string
    //.length -> returns no of elements in an array

    for(let i = 0; i < chitreshkidneys.length;i++){
        if(chitreshkidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }

    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys
    res.json({
        numberofkidneys,
        numberofunhealthykidneys,
        numberofhealthykidneys,
    });
})

//pushing a new kidney 
// body parameter in post request
app.post('/',function(req,res){
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy:ishealthy
  })
  res.json({
    msg:"Done"
  })
})

app.put('/',function(req,res){
    
})

app.delete('/',function(req,res){
    
})

app.listen(3000);