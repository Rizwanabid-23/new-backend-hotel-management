const express = require('express');
const router = express.Router();
const Review = require('../models/reviewModel');


// For saving data
router.post('/', async (req, res) => {
    try{
        const review = await Review.create(req.body);
        res.status(200).json(review)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});


// For Get all data
router.get('/', async (req, res) => {
    try{
        const review = await Review.find({});
        res.status(200).json(review)

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
        const review = await Review.findById(id);
        res.status(200).json(review)

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
        const review = await Review.findByIdAndUpdate(id, req.body);
        if(!review){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        const updated =  await Review.findById(id);
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
        const review = await Review.findByIdAndDelete(id);
        if(!Review){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        res.status(200).json(Review)
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

module.exports = router;