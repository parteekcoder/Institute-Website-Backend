const Navbar = require("../models/navbar");
const uuid = require("uuid");

const obj = {
  Administration: [
    "About Us",
    "Leadership",
    "Governing Bodies",
    "Cells",
    "Committees",
  ],
  Acadmeics: [
    "Departments",
    "Centers",
    "Academic System",
    "Academic Services",
    "Academic facilities",
    "Programs of study",
    "convocation",
    "other links",
  ],
  Admissions: [
    "Prospective Students",
    "Anti Raging",
    "Join NITJ",
    "Institute Prospectus",
  ],
  Research: [
    "Research @NITJ",
    "Incubation @NITJ",
    "Consultancy @NITJ",
    "Upcoming Events",
  ],
  Alumni: [],
  LifeatNITJ: [
    "Club & Socities",
    "Scholarships",
    "Leadership",
    "Governing Bodies",
    "Cells",
    "Committees",
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
      const order = req.body.order;

      let idx = obj[`${type}`].indexOf(`${subtype}`);
      data[`${type}`][idx].push({ name, link, id, order });
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
          ["About Us", false],
          ["Leadership", false],
          ["Governing Bodies", false],
          ["Cells", false],
          ["Committees", false],
        ],
        Acadmeics: [
          ["Departments", false],
          ["Centers", false],
          ["Academic System", false],
          ["Academic Services", false],
          ["Academic facilities", false],
          ["Programs of study", false],
          ["convocation", false],
          ["other links", false],
        ],
        Admissions: [
          ["Prospective Students", false],
          ["Anti Raging", false],
          ["Join NITJ", false],
          ["Institute Prospectus", false],
        ],
        Research: [
          ["Research @NITJ", false],
          ["Incubation @NITJ", false],
          ["Consultancy @NITJ", false],
          ["Upcoming Events", false],
        ],
        Alumni: [],
        LifeatNITJ: [
          [ "Club & Socities", false],
          ["Scholarships", false],
          ["Leadership", false],
          ["Governing Bodies", false],
          ["Cells", false],
          ["Committees", false],
        ],
      });
      await navbar.save();
      res.status(200).send("Navbar created");
    }
  });
};
