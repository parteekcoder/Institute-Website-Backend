const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
//----------------------------------->

//configuration
dotenv.config({ path: './config.env' });


//connection to database------------------------------------------->
const uri = process.env.URI;
mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() => {
    console.log("connection to database eshtablished");
}).catch(err => {
    console.log(err);
})



//server listening------------------------------------------------->
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})