const express = require('express');

const navBarRouter = require('./routes/navbar')
const newsRouter = require('./routes/news')
const latestEvents = require('./routes/latestEvent')
const administrationRouter = require('./routes/administration')
const noticeRouter = require('./routes/notice')
const rankingRouter = require('./routes/ranking')
const reasearchHighlights = require('./routes/researchHighlights')
const photoGalleryRouter = require('./routes/photoGallery')
const footerRouter = require('./routes/footer')

//----------------------------------->

//initialize app
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/navbar", navBarRouter);
app.use("/news", newsRouter);
app.use("/latestEvent", latestEvents);
app.use("/adminisration", administrationRouter);
app.use("/notice", noticeRouter);
app.use("/ranking", rankingRouter);
app.use("/researchHighlights", reasearchHighlights);
app.use("/photoGallery", photoGalleryRouter);
app.use("/footer", footerRouter);


//Export----------------------------->
module.exports = app;

//testimonials
//publications
//clubs and societies