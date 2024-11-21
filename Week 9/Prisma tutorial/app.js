const cookieParser = require('cookie-parser')
const express = require('express');
require('dotenv').config
const app = express();

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie middleware
app.use(cookieParser());

const userRouter = require('./routes/user.route')

app.use('/api',userRouter)

app.listen(3000,()=>{
    console.log('server is running')
});