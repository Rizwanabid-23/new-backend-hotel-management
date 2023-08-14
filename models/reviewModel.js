const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
    {
        guest_id: {
            type: String,
            required: [true, 'Pleasae enter guest_id']
        },
        booking_id: {
            type: String,
            required: [true, 'Pleasae enter booking_id']
        },
        text: {
            type: String,
            required: [true, 'Pleasae enter text']
        },
        date: {
            type: String,
            required: [true, 'Pleasae enter date']
        },
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;