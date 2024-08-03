const express = require('express')
const app = express()
const db = require('./db');

const bodyParser= require('body-parser'); 
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('Welcome to my hotel... How I can help your?')
})


//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItermRoutes = require('./routes/menuItemRoutes');

//use the router
app.use('/person', personRoutes);
app.use('/menuitem', menuItermRoutes) 


app.listen(3000, ()=>{
    console.log("Listen on port 3000")
})