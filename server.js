const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
//----------------------------------->

//configuration
dotenv.config({ path: './config.env' }); 

//connection to database------------------------------------------->

mongoose.connect(process.env.URI, {
    useNewUrlParser: true
}).then(() => {
    console.log("connection to database eshtablished");
}).catch(err => {
    console.log(err);
})



//server listening------------------------------------------------->
const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})