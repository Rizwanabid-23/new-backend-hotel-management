const express = require('express');
const router = express.Router();
const Guest = require('../models/guestModel');


// For saving data
router.post('/', async (req, res) => {
    try{
        const guest = await Guest.create(req.body);
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
        const guest = await Guest.find({});
        res.status(200).json(guest)

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
        const guest = await Guest.findById(id);
        res.status(200).json(guest)

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
        const guest = await Guest.findByIdAndUpdate(id, req.body);
        if(!guest){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        const updated =  await Guest.findById(id);
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
        const guest = await Guest.findByIdAndDelete(id);
        if(!guest){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        res.status(200).json(Guest)
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

// Guest Login
router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;
        const guest = await Guest.findOne({ email: email });
        if (guest) {
            if (guest.password === password) {
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