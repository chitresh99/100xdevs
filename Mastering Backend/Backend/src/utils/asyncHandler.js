const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}



// export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => async () => {}
// const asyncHandler = (func) => async () => {}

//higher order function -> Functions which can accept functions as a parameter or return it too
// const asyncHandler = (fn) => async (req,res,next) => {
//    try {
//       await fn(req,res,next)
//    } catch (error) {
//     res.status(err.code || 500).json({
//         success:false, //this is a flag
//         message : err.message
//     })
//    }
// }

export { asyncHandler }