const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname,'./files/'),function(err,files){
if(err){
    console.log(err);
}
else{
    console.log(files);
}
})


