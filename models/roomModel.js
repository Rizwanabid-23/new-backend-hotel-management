const mongoose = require('mongoose');

const roomSchema = mongoose.Schema(
    {
        number: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true
        },
        price_per_day: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        image_path: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;