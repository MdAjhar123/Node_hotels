const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');


const bodyParser= require('body-parser'); 
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


//Middleware function
const logRequest = (req, res, next) =>{
  console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalURL}`);
  next();
}
app.use(logRequest);


app.use(passport.initialize());
const localAuthMiddleWare = passport.authenticate('local', {session: false})
app.get('/', function (req, res) {
  res.send('Welcome to my hotel... How I can help your?')
})


//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItermRoutes = require('./routes/menuItemRoutes');

//use the router
app.use('/person', localAuthMiddleWare, personRoutes);
app.use('/menu', menuItermRoutes) 



app.listen(PORT, ()=>{
    console.log("Listen on port 3000")
})