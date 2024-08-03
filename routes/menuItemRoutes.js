const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItems');

// Sending data from client to server(i.e. database) 
router.post('/', async (req, res)=>{
    try {
        const data = req.body
        const newMenue = new MenuItem(data);
        const response = await newMenue.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Interval server Error'})
    }
})

//fetching(taking) data from server(i.e. database) to client 
router.get('/', async (req, res)=>{
    try {
        
        const data = await MenuItem.find();
        console.log("data fetched successfull");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Interval server Error'})
    }
})


module.exports = router;