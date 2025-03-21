const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, User} = require("../db");
const jwt_secret = require("../config");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message:"user created succesfully"
    })
    
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
     
    const user = await User.find({
    username,
    password
    })
    if(user){
        const token = jwt.sign({
            username
        },jwt_secret);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message : "Incorrect email and password"
        })
    }
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;