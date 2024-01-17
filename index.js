//3rd party packages 
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

//core modules
const bodyParser = require('body-parser');

//own modules
const users = require('./routes/users')

const app = express();
const port = process.env.port || 8080;
const mongodbURI = process.env.MONGOOSE_URI;
const server = app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

//Database Configuration
mongoose.connect(mongodbURI)
    .then(()=>console.log("Mongodb connected Succesfully"))
    .catch((err)=>console.log(err));



app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json())

app.use('/users',users)