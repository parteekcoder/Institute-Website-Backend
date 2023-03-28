const SocietyAndCubs = require("../models/SocietyAndCubs");
 const getSocietyClubsByDept=async(req,res)=>{
    try {
        const result =await SocietyAndCubs.find({department:req.params.department,show:true});
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

module.exports ={getSocietyClubsByDept};