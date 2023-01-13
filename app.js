const express = require("express");
const cors = require("cors");
const compression = require("compression");

const navBarRouter = require("./routes/navbar");
const newsRouter = require("./routes/news");
const latestEvents = require("./routes/latestEvent");
const administrationRouter = require("./routes/administration");
const noticeRouter = require("./routes/notice");
const rankingRouter = require("./routes/ranking");
const timelineRouter = require("./routes/timeline");
const publicationRouter = require("./routes/publication");
const tenderRouter = require("./routes/tender");
const reasearchHighlights = require("./routes/researchHighlights");
const photoGalleryRouter = require("./routes/photoGallery");
const footerRouter = require("./routes/footer");
const aboutRouter = require("./routes/about");
const testimonialRouter = require("./routes/testimonial");
const studentTeamRouter = require("./routes/studentTeam");
const clubRouter = require("./routes/club");

const searchRouter = require("./routes/search");

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

app.use(compression());

//routes
app.use("/navbar", navBarRouter);
app.use("/news", newsRouter);
app.use("/latestEvent", latestEvents);
app.use("/administration", administrationRouter);
app.use("/notice", noticeRouter);
app.use("/ranking", rankingRouter);
app.use("/timeline", timelineRouter);
app.use("/publication", publicationRouter);
app.use("/tender", tenderRouter);
app.use("/researchHighlights", reasearchHighlights);
app.use("/photoGallery", photoGalleryRouter);
app.use("/footer", footerRouter);
app.use("/about", aboutRouter);
app.use("/testimonial", testimonialRouter);
app.use("/studentTeam", studentTeamRouter);
app.use("/club", clubRouter);

app.use("/search", searchRouter);

//Export----------------------------->
module.exports = app;

//testimonials
//publications
//clubs and societies
