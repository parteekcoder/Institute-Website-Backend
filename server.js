const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const imgModel = require('./models/Image.model');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Set EJS as templating engine 
app.set("view engine", "ejs");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });
app.get('/', (req, res) => {
  imgModel.find({}, (err, items) => {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
          res.render('imagesPage', { items: items });
      }
  });
});
app.post('/upload', upload.single('image'), (req, res, next) => {

  console.log(req.file.filename)
  var obj = {
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
  }
  imgModel.create(obj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save();
          res.redirect('/');
      }
  });
});

const NoticeRouter = require('./routes/Notice.js');
app.use('/notice', NoticeRouter);

const CalenderRouter = require('./routes/Calender.js');
app.use('/calender', CalenderRouter);

const LatestnewsRouter = require('./routes/Latestnews.js');
app.use('/latestnews', LatestnewsRouter);

const ResearchnewsRouter = require('./routes/Researchnews.js');
app.use('/researchnews', ResearchnewsRouter);

const NavbarDynamic= require('./routes/NavbarDynamic.js');
app.use('/navbar', NavbarDynamic);


const directorMesageRouter=require('./routes/directorMessage');
app.use('/directorsMessage',directorMesageRouter);

const Campuslife=require('./routes/Campuslife');
app.use('/campuslife',Campuslife);

app.listen(3000, () => {
    console.log(`Server is running on port: ${port}`);
});

