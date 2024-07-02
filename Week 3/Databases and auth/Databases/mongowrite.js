const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chitresh:CHIR2588%7C@learning.lnvqqbh.mongodb.net/userappnew?retryWrites=true&w=majority&appName=Learning")


const Cat = mongoose.model('Users', { name: String ,email:String , password:String

});

const user = new Cat({ name: 'chitresh poojary' ,
     email:"chitreshpoojary@gmail.com",
     password:"123456"});
user.save();

