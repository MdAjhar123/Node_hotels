const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser= require('body-parser'); 
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;



app.get('/', function (req, res) {
  res.send('Welcome to my hotel... How I can help your?')
})


//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItermRoutes = require('./routes/menuItemRoutes');

//use the router
app.use('/person', personRoutes);
app.use('/menuitem', menuItermRoutes) 



app.listen(PORT, ()=>{
    console.log("Listen on port 3000")
})