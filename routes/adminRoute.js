const express = require('express');
const router = express.Router();
const Admin = require('../models/adminModel');


// For saving data
router.post('/', async (req, res) => {
    try{
        const admin = await Admin.create(req.body);
        res.status(200).json(admin)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});


// For Get all data
router.get('/', async (req, res) => {
    try{
        const admin = await Admin.find({});
        res.status(200).json(admin)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

// For get data of specific id
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const admin = await Admin.findById(id);
        res.status(200).json(admin)

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
        const admin = await Admin.findByIdAndUpdate(id, req.body);
        if(!admin){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        const updated =  await Admin.findById(id);
        console.log(updated);
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
        const admin = await Admin.findByIdAndDelete(id);
        if(!admin){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        res.status(200).json(admin)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

// Admin Login
router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username: username });
        if (admin) {
            if (admin.password === password) {
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