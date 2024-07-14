const { Router } = require("express");
const router = Router();
const { Admin, User,Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      await User.create({
        username,
        password,
      })
      res.json({
        message : "user created succesfully"
      })
});


//anyone can watch the courses without signup so no usermiddleware is there
router.get('/courses', async(req, res) => {
    const allcourses = await Course.find({});
    res.json({
        courses : allcourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId //we could have passed it in the body as well but we are passing it in the URL and that's why we are doing params
    const username = req.headers.username; //we get the username from the header
    try{
        await  User.updateOne({
            username : username
        },{
            "$push":{ //pushing the course id into the purchased courses arrays
                purchasedcourses: courseId
            }
        })
    }
    catch(e){
        console.log(e)
    }
    res.json({
        message : "purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
      const user = await User.findOne({
        username : req.headers.username
      });
      const courses = await Course.find({
        _id:{
            "$in":user.purchasedcourses
        }
      });

      res.json({
        courses : courses
      })
});

module.exports = router