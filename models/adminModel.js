const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Pleasae enter username']
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

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;