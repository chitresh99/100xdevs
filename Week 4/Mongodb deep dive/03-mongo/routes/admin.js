const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    //ideally : check a user with this username already exists but for now let's assume there is no user twice
    // Admin.create({
    //     username:username,
    //     password:password
    // })
    // .then(function(){ // we are waiting in case then there is a network error and making sure the entry actually happened
    //     res.json({
    //         message : 'Admin created successfully'
    //     })
    // })

    await Admin.create({
        username:username,
        password:password
    })

    res.json({
        message : "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses',(req, res) => {
    res.json({
      courses:"cohort"
    })
});

module.exports = router;