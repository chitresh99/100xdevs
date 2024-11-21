const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookietoken')

//user signup

exports.signup = async(req,res,next) =>{
     try{
      const {name, email , password} = req.body

      if(!name || !email || !password){
        throw new Error('please provide all fields')
      }
      
      //prisma code
      const user = await prisma.user.create({
        data:{
            name,
            email,
            password,
        }
      })

      cookieToken(user,res)
     }
     catch(error){
       throw new Error(error)
     }
}