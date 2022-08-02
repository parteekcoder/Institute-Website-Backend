const Navbar = require('./../models/navbar');
//----------------------------------->

//----------------------------------------------------------------------->
exports.show = async (req, res) => {
    Navbar.findOne({}, (err, data) => {
        if (err) {
            res.Status(500).send("Something wrong happend");
        } else {
            res.status(200).json(data);
        }
    });
}

//----------------------------------------------------------------------->
exports.add = async (req, res) => {
    Navbar.findOne({}, (err, data) => {
        if (err) {
            res.Status(500).send("Something wrong happend");
        } else {
            const type = req.body.type;
            const subtype = req.body.subtype;
            const link = req.body.link;
            const name = req.body.name;

            console.log(type, subtype, link, name);

            if (data == null) {
                const Administration = {
                    AboutUs: [],
                    Leadership: [],
                    Cells: [],
                    Committees: [],
                    GoverningBodies: [],
                };

                const Academics = {
                    Departments: [],
                    AcademicSystem: [],
                    ProgrammeofStudy: [],
                    Centers: [],
                    AcademicServices: [],
                    AcademicFacilities: [],
                    Convocation: [],
                    OtherLinks: [],
                };

                const Admissions = {
                    ProspectiveStudents: [],
                    JoinNitj: [],
                    AntiRagging: [],
                    InstitueProspectus: [],
                };

                const LifeAtNITJ = {
                    ClubsandSocities: [],
                    Accommodation: [],
                    NitJFestivals: [],
                    Scholarships: [],
                    CampusAmmenities: [],
                    HealthAndWellness: [],
                };

                const Research = {
                    Researches: [],
                    Incubations: [],
                    Consultancies: [],
                    UpcomingEvents: [],
                };

                const Alumni = {
                    Alumni: [],
                };

                const navbar = new Navbar({
                    Administration,
                    Academics,
                    Admissions,
                    LifeAtNITJ,
                    Research,
                    Alumni,
                });

                navbar.save();
                res.status(201).send("Navbar created");
            } else {
                let arr = data[`${type}`][`${subtype}`];
                console.log(arr);

                let id = uuid();
                arr.push({ id, name, link });

                Navbar.findOneAndUpdate(
                    {},
                    { [`${type}`]: data[`${type}`] },
                    (err, data1) => {
                        if (err) {
                            res.Status(500).send("Something wrong happend");
                        } else {
                            res.send(data);
                        }
                    }
                );
            }
        }
    });
}

//----------------------------------------------------------------------->
exports.delete = async (req, res) => {
    Navbar.findOne({}, (err, data) => {
        if (err) {
            res.Status(500).send("Something wrong happend");
        } else {
            const type = req.body.type;
            const subtype = req.body.subtype;
            const id = req.body.id;


            let arr = data[`${type}`][`${subtype}`];
            arr = arr.filter((item) => item.id != id);
            data[`${type}`][`${subtype}`] = arr;

            Navbar.findOneAndUpdate(
                {},
                { [`${type}`]: data[`${type}`] },
                (err, data1) => {
                    if (err) {
                        res.Status(500).send("Something wrong happend");
                    } else {
                        res.status(204).send(data);
                    }
                }
            );
        }
    });
}