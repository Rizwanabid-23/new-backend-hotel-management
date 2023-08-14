const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');


// For saving data
router.post('/', async (req, res) => {
    try{
        const employee = await Employee.create(req.body);
        res.status(200).json({message: true})

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: true})
    }
});


// For Get all data
router.get('/', async (req, res) => {
    try{
        const employee = await Employee.find({});
        res.status(200).json({employee: employee, message: true})
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: false})
    }
});

// For get data of specific id
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const employee = await Employee.findById(id);
        res.status(200).json(employee)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

// For update data against id
router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const employee = await Employee.findByIdAndUpdate(id, req.body);
        if(!employee){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        const updated =  await Employee.findById(id);
        res.status(200).json(updated)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

// For delete data against id
router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if(!employee){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        res.status(200).json(employee)
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

// Employee Login
router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;
        const employee = await Employee.findOne({ email: email });
        if (employee) {
            if (employee.password === password) {
                res.send({message: true});
            } else {
                res.send({message: false});
            }
        } else {
            res.send({message: false});
        }
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: false});
    }
});



module.exports = router;