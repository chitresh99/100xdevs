import { asyncHandler } from "../utils/asyncHandler.js";

//method
//higher order function which takes function as a parameter
const registerUser = asyncHandler( async (req,res) => {
  //get user from frontend
  //validation - not empty
  //check if user already existsa:check from username and email
  //check for images,check for avatar
  //upload them to cloudinary
  //create user object - create entry in db
  //remove password and refresh token field from response
  //remove password and refresh token field from response
  //check for user creation
  //return response
})

export {registerUser}