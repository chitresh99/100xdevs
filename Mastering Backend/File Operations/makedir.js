const fs = require('fs');

fs.mkdir('./apple',{recursive:true},(err) => {
if(err){
    throw err;
}else{
    console.log('directory created');
}
})