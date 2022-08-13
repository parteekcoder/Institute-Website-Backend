const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
//----------------------------------->

//configuration
dotenv.config({ path: './config.env' });

//connection to database------------------------------------------->

// const uri = 'mongodb://localhost:27017/test2';

mongoose.connect(process.env.URI, {
    useNewUrlParser: true
}).then(() => {
    console.log("connection to database eshtablished");
}).catch(err => {
    console.log(err);
})



//server listening------------------------------------------------->
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

