import { asyncHandler } from "../utils/asyncHandler.js";

//method
//higher order function which takes function as a parameter
const registerUser = asyncHandler( async (req,res) => {
return res.status(200).json({
    message:"ok"
})
})

export {registerUser}