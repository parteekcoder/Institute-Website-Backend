const Acadcord= require('../models/Acadcord')

const getAllAcadcord=async(req,res)=>{

    try {
        const result=await Acadcord.find({show:true});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}
const getByIdAcadcord=async(req,res)=>{

    try {
        const result=await Acadcord.find(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const getByDeptAcadcord=async(req,res)=>{
    try {
        const result=await Acadcord.find({show:true,department:req.params.dept});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const addAcadcord=async(req,res)=>{
    const acadcordinator=new Acadcord({...req.body,department:req.params.dept});

    try {
        const result=await acadcordinator.save();
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json("Error: " + error);
        
    }
}

const deleteAcadcord=async(req,res)=>{
    try {
        const result=await Acadcord.findByIdAndUpdate(req.params.id,{$set:{show:false}});
        res.status(200).json("Acadcordinator deleted succesfully")
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const updateAcadcord=async(req,res)=>{
    try {
        const result=await Acadcord.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json("Acadcordinator updated succesfully")
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

module.exports={getAllAcadcord,getByDeptAcadcord,getByIdAcadcord,updateAcadcord,deleteAcadcord,addAcadcord}

