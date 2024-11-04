const fs = require('fs');

const data = new Uint8Array(Buffer.from('Hello chitresh'));

fs.writeFile('hello.txt',data,(err)=>{
    if(err){
        throw(err);
    }
    else{
        console.log('the file has been saved');
    }
})