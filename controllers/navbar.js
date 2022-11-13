const Navbar = require("../models/navbar");
const uuid = require("uuid");
//----------------------------------->

//----------------------------------------------------------------------->
const obj = {
  Administration: [
    "ABOUT US",
    "LEADERSHIP",
    "GOVERNING BODIES",
    "CELLS",
    "COMMITTEES",
  ],
  Acadmeics: [
    "DEPARTMENTS",
    "CENTERS",
    "ACADEMIC SYSTEM",
    "ACADEMIC SERVICES",
    "ACADEMIC FACILITIES",
    "PROGRAMMES OF STUDY",
    "CONVOCATION",
    "OTHER LINKS",
  ],
  Admissions: [
    "PROSPECTIVE STUDENTS",
    "ANTI RAGGING",
    "JOIN NITJ",
    "INSTITUTE PROSPECTS",
  ],
  Research: [
    "Research @NITJ",
    "INCUBATION @NITJ",
    "CONSULTANCY @NITJ",
    "UPCOMING EVENTS",
  ],
  Alumni: [],
  LifeatNITJ: [
    "CLUB & SOCITIES",
    "SCHOLARSHIPS",
    "LEADERSHIP",
    "GOVERNING BODIES",
    "CELLS",
    "COMMITIES",
  ],
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
      let ind=0;

      for(let i=0;i<data[`${type}`].length;i++){
        if(data[`${type}`][i][0]===subtype){
          ind=i;
        }
      }

      for(let i=2;i<data[`${type}`][ind].length;i++){
        if(data[`${type}`][ind][i].id===id){
          data[`${type}`][ind].splice(i,1);
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
  const navbar = new Navbar({
    Administration: [
      ["ABOUT US", "FASLE"],
      ["LEADERSHIP", "FASLE"],
      ["GOVERNING BODIES", "FASLE"],
      ["CELLS", "FASLE"],
      ["COMMITTEES", "FASLE"],
    ],
    Acadmeics: [
      ["DEPARTMENTS", "FASLE"],
      ["CENTERS", "FASLE"],
      ["ACADEMIC SYSTEM", "FASLE"],
      ["ACADEMIC SERVICES", "FASLE"],
      ["ACADEMIC FACILITIES", "FASLE"],
      ["PROGRAMMES OF STUDY", "FASLE"],
      ["CONVOCATION", "FASLE"],
      ["OTHER LINKS", "FASLE"],
    ],
    Admissions: [
      ["PROSPECTIVE STUDENTS", "FASLE"],
      ["ANTI RAGGING", "FASLE"],
      ["JOIN NITJ", "FASLE"],
      ["INSTITUTE PROSPECTS", "FASLE"],
    ],
    Research: [
      ["Research @NITJ", "FASLE"],
      ["INCUBATION @NITJ", "FASLE"],
      ["CONSULTANCY @NITJ", "FASLE"],
      ["UPCOMING EVENTS", "FASLE"],
    ],
    Alumni: [],
    LifeatNITJ: [
      ["CLUB & SOCITIES", "FALSE"],
      ["SCHOLARSHIPS", "FALSE"],
      ["LEADERSHIP", "FALSE"],
      ["GOVERNING BODIES", "FALSE"],
      ["CELLS", "FALSE"],
      ["COMMITIES", "FALSE"],
    ],
  });
  await navbar.save();
  res.sendStatus(200);
};
