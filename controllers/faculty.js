const passport = require('passport');
const Faculty = require('../models/Faculty')
const Sessions = require('../models/session');

const getAllFaculty = async (req, res) => {
    try {
        const result = await Faculty.find({ show: true }).sort({order:1});
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const getByIdFaculty = async (req, res) => {
    try {
        const result = await Faculty.find({ _id: req.params.id });
        res.status(200).json({ data: result, validation: {status:req.user} });
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const getByDeptFaculty = async (req, res) => {
    try {
        const result = await Faculty.find({ show: true, department: req.params.dept });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
}

const addFaculty = async (req, res) => {
    const faculty = new Faculty({ ...req.body, department: req.params.dept });

    try {
        const result = await faculty.save();
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json("Error: " + error);

    }
}

const deleteFaculty = async (req, res) => {
    try {
        const result = await Faculty.findByIdAndUpdate(req.params.id, { $set: { show: false } });
        res.status(200).json("Faculty deleted succesfully")
    } catch (error) {
        res.status(400).json("Error: " + error);

    }
}

const updateFaculty = async (req, res) => {
    try {
        const result = await Faculty.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json("Faculty updated succesfully")
    } catch (error) {
        res.status(400).json("Error: " + error);

    }
}

module.exports = { getAllFaculty, getByDeptFaculty, getByIdFaculty, updateFaculty, deleteFaculty, addFaculty }
