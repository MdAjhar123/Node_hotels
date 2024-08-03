const mongoose = require('mongoose');
require('dotenv').config();

//Define mongodb connection url      
const mongoURL = process.env.MONGODB_URL_LOCAL  //local database
// const mongoURL = process.env.MONGODB_URL;   //global database keep in dotenv file store in atlas

//set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get default connection
//mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;


//define event listener for database connection
db.on('connected', ()=>{
    console.log('connected to mongodb server');
});

db.on('error', (err)=>{
    console.error('connected to mongodb server', err);
});

db.on('disconnected', ()=>{
    console.log('mongodb to disconnected');
});

module.exports = db;

