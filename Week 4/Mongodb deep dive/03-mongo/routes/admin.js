const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")
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
        username: username,
        password: password
    })

    res.json({
        message: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {

    // To make it more better we need zod

    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;

    const newcourse = await Course.create({
        title,
        description,
        imagelink,
        price
    }) 
    res.json({
        message: "course created succesfully", courseid: newcourse._id //this id is automatically created
    })


});

//fetching all courses
router.get('/courses', adminMiddleware, async (req, res) => {
    

    const allcourses = await Course.find({});
    res.json({
        courses : allcourses
    })
});

module.exports = router;