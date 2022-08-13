const express = require('express');
const path = require('path');
const updateDetails = require('./utils/updateDetails');
const NoticeRouter = require('./routes/notice')
const CalenderRouter = require('./routes/calender')
const LatestNewsRouter = require('./routes/latestNews')
const ResearchNewsRouter = require('./routes/researchNews')
const NavBarRouter = require('./routes/navbar')
const DirectorMessageRouter = require('./routes/directorMessage')
const campusLifeRouter = require('./routes/campusLife')
const imageUploadRouter = require('./routes/imageUploads');
const cors = require('cors');
const bodyParser = require('body-parser');

//----------------------------------->

//initialize app
const app = express();

//middleware
app.use(express.json());
app.all('*', updateDetails);
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


//routes
app.get('/', (req, res) => {
    res.send("Working...");
})
app.use("/notice", NoticeRouter);
app.use("/calender", CalenderRouter);
app.use("/latestNews", LatestNewsRouter);
app.use("/researchNews", ResearchNewsRouter);
app.use("/navbar", NavBarRouter);
app.use("/directorMessage", DirectorMessageRouter);
app.use("/campusLife", campusLifeRouter);
app.use("/uploadImage", imageUploadRouter);

//Export----------------------------->
module.exports = app;