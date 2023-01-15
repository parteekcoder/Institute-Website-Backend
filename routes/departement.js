const express = require('express');
const { getByDeptAcadcord, updateAcadcord, deleteAcadcord, addAcadcord } = require('../controllers/Acadcord');
const { getByDeptAchievement, addAchievement, updateAchievement, deleteAchievement } = require('../controllers/achievement');
const { getByDeptActivity, addActivity, updateActivity, deleteActivity } = require('../controllers/activity');
const { getByIdAlumni, addAlumni, updateAlumni, deleteAlumni, getByDeptAlumni } = require('../controllers/Alumni');
const { getByIdFaculty, addFaculty, updateFaculty, deleteFaculty, getByDeptFaculty } = require('../controllers/Faculty');
const { getByIdInfrastructure, addInfrastructure, updateInfrastructure, deleteInfrastructure, getByDeptInfrastructure } = require('../controllers/infrastructure');
const { getByIdPhdScholar, addPhdScholar, updatePhdScholar, deletePhdScholar, getByDeptPhdScholar } = require('../controllers/phdScholar');
const { getAllPlacement, getByIdPlacement, addPlacement, updatePlacement, deletePlacement, getByDeptPlacement } = require('../controllers/placement');
const { getByIdStaff, addStaff, updateStaff, deleteStaff, getByDeptStaff } = require('../controllers/Staff');
const { getByIdStudent, addStudent, updateStudent, deleteStudent, getByDeptStudent } = require('../controllers/Student');


const Router = express.Router();


Router.get('/:dept/Acadcord',getByDeptAcadcord);
Router.post('/:dept/Acadcord',addAcadcord);
Router.delete('/:dept/Acadcord/:id',deleteAcadcord);
Router.put('/:dept/Acadcord/:id',updateAcadcord);

Router.get('/:dept/Faculty',getByDeptFaculty)
Router.post('/:dept/Faculty',addFaculty);
Router.put('/:dept/Faculty/:id',updateFaculty);
Router.delete('/:dept/Faculty/:id',deleteFaculty);

Router.get('/:dept/Placement',getByDeptPlacement);
Router.post('/:dept/Placement',addPlacement);
Router.put('/:dept/Placement/:id',updatePlacement);
Router.delete('/:dept/Placement/:id',deletePlacement);

Router.get('/:dept/Infrastructure',getByDeptInfrastructure);
Router.post('/:dept/Infrastructure',addInfrastructure);
Router.put('/:dept/Infrastructure/:id',updateInfrastructure);
Router.delete('/:dept/Infrastructure/:id',deleteInfrastructure);

Router.get('/:dept/Alumni',getByDeptAlumni);
Router.post('/:dept/Alumni',addAlumni);
Router.put('/:dept/Alumni/:id',updateAlumni);
Router.delete('/:dept/Alumni/:id',deleteAlumni);

Router.get('/:dept/PhdScholar',getByDeptPhdScholar);
Router.post('/:dept/PhdScholar',addPhdScholar);
Router.put('/:dept/PhdScholar/:id',updatePhdScholar);
Router.delete('/:dept/PhdScholar/:id',deletePhdScholar);

Router.get('/:dept/Staff',getByDeptStaff);
Router.post('/:dept/Staff',addStaff);
Router.put('/:dept/Staff/:id',updateStaff);
Router.delete('/:dept/Staff/:id',deleteStaff);

Router.get('/:dept/Student',getByDeptStudent);
Router.post('/:dept/Student',addStudent);
Router.put('/:dept/Student/:id',updateStudent);
Router.delete('/:dept/Student/:id',deleteStudent);

Router.get('/:dept/Activity',getByDeptActivity);
Router.post('/:dept/Activity',addActivity);
Router.put('/:dept/Activity/:id',updateActivity);
Router.delete('/:dept/Activity/:id',deleteActivity);

Router.get('/:dept/Achievement',getByDeptAchievement);
Router.post('/:dept/Achievement',addAchievement);
Router.put('/:dept/Achievement/:id',updateAchievement);
Router.delete('/:dept/Achievement/:id',deleteAchievement);

module.exports = Router;