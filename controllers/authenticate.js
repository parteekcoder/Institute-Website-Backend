const Faculty = require("../models/Faculty");
const jwt=require('jsonwebtoken');

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email){
            res.status(400).json({status:false,message:"Email Not provided"})
        }
        if(!password){
            res.status(400).json({status:false,message:"Password Not provided"})
        }

        const result=await Faculty.findOne({email:email});
        if(!result)return res.status(400).json({status:false,message:"Wrong Email Or Password!!"})
        if(!result.password===password)return res.status(400).json({status:false,message:"Wrong Email Or Password!!"})
        const {[password]:remove,...otherProps}=result
        const token=jwt.sign({...otherProps},'abc'/*Secret String */,{
            expiresIn:'10d'
        });

        res.cookie("access",token,{
            httpOnly:true
        }).status(200).json({status:true,message:"Your are succesfully Authenticated",data:{...otherProps}});
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}


module.exports= login;