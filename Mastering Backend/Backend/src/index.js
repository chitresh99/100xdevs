import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
  path : './env'
})

connectDB()









// function connectDB() {

// }

// connectDB()

// ( async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("error",(error) => {
//         console.log("ERR:",error);
//         throw error
//        })

//        app.listen(process.env.PORT,() => {
//         console.log('APP is listening on port ${process.env.PORT}');
//        })
//     }catch (error) {
//         console.error("ERROR",error)
//         throw err
//     }
// }) ()


