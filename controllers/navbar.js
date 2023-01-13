const Navbar = require("../models/navbar");
const uuid = require("uuid");
//----------------------------------->

//----------------------------------------------------------------------->
const obj = {
    Administration: ["ABOUT US", "LEADERSHIP", "GOVERNING BODIES", "CELLS", "COMMITTEES"],
    Acadmeics: ["DEPARTMENTS", "CENTERS", "ACADEMIC SYSTEM", "ACADEMIC SERVICES", "ACADEMIC FACILITIES", "PROGRAMMES OF STUDY", "CONVOCATION", "OTHER LINKS"],
    Admissions: ["PROSPECTIVE STUDENTS", "ANTI RAGGING", "JOIN NITJ", "INSTITUTE PROSPECTS"],
    Research: ["Research @NITJ", "INCUBATION @NITJ", "CONSULTANCY @NITJ", "UPCOMING EVENTS"],
    Alumni: [],
    LifeatNITJ: ["CLUB & SOCITIES", "SCHOLARSHIPS", "LEADERSHIP", "GOVERNING BODIES", "CELLS", "COMMITIES"],
};
exports.show = async (req, res) => {
    Navbar.findOne({}, (err, data) => {
        if (err) {
            res.status(500).send("Something wrong happend");
        } else {
            res.status(200).send(data);
        }
    });
};

//----------------------------------------------------------------------->
exports.update = async (req, res) => {
    console.log(req.body);

    Navbar.findOne({}, (err, data) => {
        if (err) {
            res.Status(500).send("Something wrong happend");
        } else {
            const type = req.body.menu;
            const subtype = req.body.submenu;
            const link = req.body.link;
            const name = req.body.name;
            const id = uuid.v4();

            let idx = obj[`${type}`].indexOf(`${subtype}`);
            data[`${type}`][idx].push({ name, link, id });
            console.log(data);
            Navbar.findOneAndUpdate({}, { $set: data }, (err, data) => {
                if (err) {
                    res.send("Something wrong happend");
                } else {
                    res.send(data);
                }
            });
        }
    });
};

//----------------------------------------------------------------------->
exports.delete = async (req, res) => {
    Navbar.findOne({}, async (err, data) => {
        if (err) {
            res.Status(500).send("Something wrong happend");
        } else {
            const type = req.body.menu;
            const subtype = req.body.submenu;
            const id = req.body.id;

            let data = await Navbar.findOne({});
            let ind = 0;

            for (let i = 0; i < data[`${type}`].length; i++) {
                if (data[`${type}`][i][0] === subtype) {
                    ind = i;
                }
            }

            for (let i = 2; i < data[`${type}`][ind].length; i++) {
                if (data[`${type}`][ind][i].id === id) {
                    data[`${type}`][ind].splice(i, 1);
                }
            }

            console.log(data);

            Navbar.findOneAndUpdate({}, { $set: data }, (err, data) => {
                if (err) {
                    res.send("Something wrong happend");
                } else {
                    res.send(data);
                }
            });
        }
    });
};

exports.create = async (req, res) => {
    //check if already exists
    Navbar.findOne({}, async (err, data) => {
        if (err) {
            return res.status(500).send("Something wrong happend");
        } else if (data) {
            return res.status(200).send("Already exists");
        } else {
            const navbar = new Navbar({
                Administration: [
                    ["ABOUT US", false],
                    ["LEADERSHIP", false],
                    ["GOVERNING BODIES", false],
                    ["CELLS", false],
                    ["COMMITTEES", false],
                ],
                Acadmeics: [
                    ["DEPARTMENTS", false],
                    ["CENTERS", false],
                    ["ACADEMIC SYSTEM", false],
                    ["ACADEMIC SERVICES", false],
                    ["ACADEMIC FACILITIES", false],
                    ["PROGRAMMES OF STUDY", false],
                    ["CONVOCATION", false],
                    ["OTHER LINKS", false],
                ],
                Admissions: [
                    ["PROSPECTIVE STUDENTS", false],
                    ["ANTI RAGGING", false],
                    ["JOIN NITJ", false],
                    ["INSTITUTE PROSPECTS", false],
                ],
                Research: [
                    ["Research @NITJ", false],
                    ["INCUBATION @NITJ", false],
                    ["CONSULTANCY @NITJ", false],
                    ["UPCOMING EVENTS", false],
                ],
                Alumni: [],
                LifeatNITJ: [
                    ["CLUB & SOCITIES", false],
                    ["SCHOLARSHIPS", false],
                    ["LEADERSHIP", false],
                    ["GOVERNING BODIES", false],
                    ["CELLS", false],
                    ["COMMITIES", false],
                ],
            });
            await navbar.save();
            res.status(200).send("Navbar created");
        }
    });
};
