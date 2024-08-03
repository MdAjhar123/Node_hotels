const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


//POST METHOD: Sending data from client to server(i.e. database) 
router.post('/', async (req, res)=>{
    
    try{
        const data = req.body 
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


//fetching(taking) data from server(i.e. database) to client 
//GET method to get the person
router.get('/', async (req, res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched successfull');
        res.status(200).json(data);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})


//GET METHOD: fetching(taking) data from server(i.e. database) to client of work type present
router.get('/:workType', async (req, res)=>{
    try {

        workType = req.params.workType  //extract the work type from the url parameter

        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const data = await Person.find({work: workType});
            console.log('data fetched successfull');
            res.status(200).json(data); 
        }
        else{
            res.status(400).json({error: 'Invalid work type'})
        }  
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})


//put METHOD or patch: update data present in server(i.e. database) 
router.put('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;         //Extract the Id from the URL parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,          //return the updated document
            runValidators: true     //run mongoose validator
        });

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated')
        res.status(200).json(response);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})


//delete METHOD: delete data present in server(i.e. database) 
router.delete('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;         //Extract the person's Id from the URL parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndDelete(personId)

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data delete')
        res.status(200).json({message: 'Person deleted susccessfully'});
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

module.exports = router;