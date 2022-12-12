const express = require("express");
const cors = require("cors");

const navBarRouter = require("./routes/navbar");
const newsRouter = require("./routes/news");
const latestEvents = require("./routes/latestEvent");
const administrationRouter = require("./routes/administration");
const noticeRouter = require("./routes/notice");
const rankingRouter = require("./routes/ranking");
const reasearchHighlights = require("./routes/researchHighlights");
const photoGalleryRouter = require("./routes/photoGallery");
const footerRouter = require("./routes/footer");
const aboutRouter = require("./routes/about");
const bodyParser = require("body-parser");
//----------------------------------->

//initialize app
const app = express();

//middleware
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

//routes
app.use("/navbar", navBarRouter);
app.use("/news", newsRouter);
app.use("/latestEvent", latestEvents);
app.use("/administration", administrationRouter);
app.use("/notice", noticeRouter);
app.use("/ranking", rankingRouter);
app.use("/researchHighlights", reasearchHighlights);
app.use("/photoGallery", photoGalleryRouter);
app.use("/footer", footerRouter);
app.use("/about", aboutRouter);

//Export----------------------------->
module.exports = app;

//testimonials
//publications
//clubs and societies
