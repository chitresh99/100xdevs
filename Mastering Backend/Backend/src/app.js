import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import exp from "constants";


const app = express();


//configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true //to allow credentials
}))

//preparation for handling data in the backend backend
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))

//these are public assets for images
app.use(express.static("public"))
app.use(cookieParser())



//to access the user's browser cookies and set the cookies
app.use(cookieParser())

export {app}