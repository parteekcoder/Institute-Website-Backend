const jwt=require('jsonwebtoken')
const verifyToken=(req,res,next)=>{

    const token=req.cookies.access;
    if(!token) return res.status(401).json({status:false,message:"You are not authenticated"})

    jwt.verify(token,'abc'/*secret string*/,(error,user)=>{
        if(error) return res.status(401).json({status:false,message:"You are not authenticated"})
        req.user=user;
        next();
    } )
}
const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{

        if(req.user.id===req.params.id){
            next();
        }else{
            return res.status(401).json({status:false,message:"You are not authenticated"})
        }
    })
}
const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{

        if(req.user.isAdmin){
            next();
        }else{
            return res.status(401).json({status:false,message:"You are not authenticated"})
        }
    })
}

module.exports={verifyAdmin,verifyToken,verifyUser};
