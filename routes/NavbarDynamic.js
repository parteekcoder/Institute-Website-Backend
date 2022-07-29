const bodyParser = require("body-parser");
const express = require("express");
const { set } = require("mongoose");
const Navbar = require("../models/NavbarDynamic");
const uuid = require("uuid").v4;
app = express();
const router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/show", (req, res) => {
  Navbar.findOne({}, (err, data) => {
    if (err) {
      res.Status(500).send("Something wrong happend");
    } else {
      // send data as json
      res.json(data);
    }
  });
});

router.post("/add", (req, res) => {
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
        res.send("Navbar created");
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
});

router.post("/delete", (req, res) => {
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
            res.send(data);
          }
        }
      );
    }
  });
});

module.exports = router;
