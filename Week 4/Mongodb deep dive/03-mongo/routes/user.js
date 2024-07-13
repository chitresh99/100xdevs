const { Router } = require("express");
const router = Router();
const { Admin } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router