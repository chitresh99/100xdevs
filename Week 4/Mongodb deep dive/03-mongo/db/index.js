const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("");

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedcourses : [{
        type:mongoose.Schema.Types.ObjectId, //refers to the course table
        ref : 'Courses'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}