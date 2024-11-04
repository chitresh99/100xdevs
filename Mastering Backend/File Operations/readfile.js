//callback api

const fs = require('fs');

fs.readFile('name.txt',(err,data)=>{
    if(err){
        throw(err);
    }
    else{
        console.log(data.toString());
    }
})

//





