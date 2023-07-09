const jwt = require("jsonwebtoken");


const authMiddleware = async(req,res,next) =>{
  try {
    const token = req.headers['authorization'].split(" ")[1]
    jwt.verify(token,process.env.TOKEN_JWT,(err,decode)=>{
    if(err){
        res.status(200).json({status:false,message:"Auth failed"});  
    }else{
        req.body.userId = decode.id
        const id = req.body.userId
        if(id === null){
          console.log("no id found")
        }
        next()
    }
  })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      status:false,
      message:"Auth failed"
    })
  }
}

module.exports = {authMiddleware}