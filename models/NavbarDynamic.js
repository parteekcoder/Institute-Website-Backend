const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NavbarSchema = new Schema({
    Administration:{type:Object,default:{
        'AboutUs':[],
        'Leadership':[],
        'Cells':[],
        'Committees':[],
        'GoverningBodies':[],
    }},

    Academics:{type:Object,default:{
        'Departments':[],
        'AcademicSystem':[],
        'ProgrammeofStudy':[],
        'Centers':[],
        'AcademicServices':[],
        'AcademicFacilities':[],
        'Convocation':[],
        'OtherLinks':[],
    }},

    Admissions:{type:Object,default:{
        'ProspectiveStudents':[],
        'JoinNitj':[],
        'AntiRagging':[],
        'InstitueProspectus':[],
    }},

    LifeAtNITJ:{type:Object,default:{
        'ClubsandSocities':[],
        'Accommodation':[],
        'NitJFestivals':[],
        'Scholarships':[],
        'CampusAmmenities':[],
        'HealthAndWellness':[],
    }},

    Research:{type:Object,default:{
        'Researches':[],
        'Incubations':[],
        'Consultancies':[],
        'UpcomingEvents':[],
    }},
    Alumni:{
        type:Object,default:{
            'Alumni':[],
        }
    }

});

const Navbar= mongoose.model('Navbar', NavbarSchema);

module.exports = Navbar;