const jwt=require('jsonwebtoken');
exports.home=(req,res)=>{
const token =req.cookies.token;
if(!token) return res.status(401)


const payload=jwt.verify(token,process.env.KEY)

if(!payload) return res.status(404)
    
return res.status(200).json({userName:payload.userName});
}