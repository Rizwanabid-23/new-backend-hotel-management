const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');


// For saving data
router.post('/', async (req, res) => {
    try{
        const booking = await Booking.create(req.body);
        res.status(200).json(booking)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});


// For Get all data
router.get('/', async (req, res) => {
    try{
        const booking = await Booking.find({});
        res.status(200).json(booking)

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
        const booking = await Booking.findById(id);
        res.status(200).json(booking)

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
        const booking = await Booking.findByIdAndUpdate(id, req.body);
        if(!booking){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        const updated =  await Booking.findById(id);
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
        const booking = await Booking.findByIdAndDelete(id);
        if(!booking){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        res.status(200).json(booking)
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

module.exports = router;