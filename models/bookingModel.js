const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
    {
        guest_id: {
            type: String,
            required: [true, 'Pleasae enter guest id']
        },
        room_id: {
            type: String,
            required: [true, 'Pleasae enter room id']
        },
        arrival_date_time: {
            type: String,
            required: true,
        },
        departure_date_time: {
            type: String,
            required: true,
        },
        number_of_adults: {
            type: Number,
            required: false,
            default: 0,
        },
        number_of_children: {
            type: Number,
            required: false,
            default: 0,
        },
        booking_status: {
            type: String,
            required: false,
            default: 'Approved',
        },     
    },
    {
        timestamps: true,
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;