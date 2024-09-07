import express from "express"

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js" //should be {app} instead of just app

dotenv.config({
  path : './env'
})

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000,() => {
    console.log(`server is running at port :${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("Mongo db connection failed",err);
})
