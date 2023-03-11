const Patent= require('../models/Patent');

const getAllPatent=async(req,res)=>{

    try {
        const result=await Patent.find({show:true});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}
const getByIdPatent=async(req,res)=>{

    try {
        const result=await Patent.find(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const getByDeptPatent=async(req,res)=>{
    try {
        const result=await Patent.find({show:true,department:req.params.dept});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const addPatent=async(req,res)=>{
    const newPatent=new Patent({...req.body,department:req.params.dept});

    try {
        const result=await newPatent.save();
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json("Error: " + error);
        
    }
}

const deletePatent=async(req,res)=>{
    try {
        const result=await Patent.findByIdAndUpdate(req.params.id,{$set:{show:false}});
        res.status(200).json("Patent deleted succesfully")
    } catch (error) {
        res.status(400).json("Error: " + error);
        
    }
}

const updatePatent=async(req,res)=>{
    try {
        const result=await Patent.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json("Patent updated succesfully")
    } catch (error) {
        res.status(400).json("Error: " + error);
        
    }
}

module.exports={getAllPatent,getByDeptPatent,getByIdPatent,updatePatent,deletePatent,addPatent}

