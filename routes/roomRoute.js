const express = require('express');
const router = express.Router();
const multer = require('multer');
const Room = require('../models/roomModel');



const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "./uploads/images/");
    },
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({storage});


// For saving data
router.post('/',upload.single('image'), async (req, res) => {
    try{
        const { number, type, price_per_day, description } = req.body
        const imagePath = req.file.path;
        const room = await Room.create({
            number,
            type,
            price_per_day,
            description,
            image_path: imagePath,
        });
        res.status(200).json({message: true});

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});


// For Get all data
router.get('/', async (req, res) => {
    try{
        const room = await Room.find({});
        res.status(200).json({data: room, message: true})
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
        const room = await Room.findById(id);
        res.status(200).json(room)

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
        const room = await Room.findByIdAndUpdate(id, req.body);
        if(!room){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        const updated =  await Room.findById(id);
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
        const room = await Room.findByIdAndDelete(id);
        if(!room){
            return res.status(404).json({message: `Does not extist this ${id}`});

        };
        res.status(200).json(room)

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message})
    }
});

module.exports = router;