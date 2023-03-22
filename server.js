const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const {admin_panel,router} = require('./admin_panel')
//----------------------------------->

process.on("uncoughtException", (err) => {
    console.log("uncought exception occured");
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: "./.env" });


mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("connection to database eshtablished");
    })
    .catch((err) => {
        console.log(err);
    });

//server listening------------------------------------------------->
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

//admin panel 
app.use(admin_panel.options.rootPath, router)

process.on("unhandledRejection", (err) => {
    console.log("unhandleed rejection occured");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
