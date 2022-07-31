const express = require('express');
const NoticeRouter = require('./routes/notice')
const CalenderRouter = require('./routes/calender')
const LatestNewsRouter = require('./routes/latestNews')
const ResearchNewsRouter = require('./routes/researchNews')
const NavBarRouter = require('./routes/navbar')
const DirectorMessageRouter = require('./routes/directorMessage')
const campusLifeRouter = require('./routes/campusLife')
//----------------------------------->

//initialize app
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/notice", NoticeRouter);
app.use("/calender", CalenderRouter);
app.use("/latestNews", LatestNewsRouter);
app.use("/researchNews", ResearchNewsRouter);
app.use("/navbar", NavBarRouter);
app.use("/directorMessage", DirectorMessageRouter);
app.use("/campusLife", campusLifeRouter);

//Export----------------------------->
module.exports = app;