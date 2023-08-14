const mongoose = require('mongoose');

const guestSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Pleasae enter name']
        },
        email: {
            type: String,
            required: [true, 'Pleasae enter email']
        },
        contact_number: {
            type: String,
            required: [true, 'Pleasae enter contact']
        },
        password: {
            type: String,
            required: [true, 'Pleasae enter password']
        },
    },
    {
        timestamps: true,
    }
);

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;