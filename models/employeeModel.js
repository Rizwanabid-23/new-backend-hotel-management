const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
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
        cnic: {
            type: String,
            required: [true, 'Pleasae enter cnic']
        },
        password: {
            type: String,
            required: [true, 'Pleasae enter password']
        },
        salary: {
            type: Number,
            required: false,
            default: 22000,
        },
    },
    {
        timestamps: true,
    }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;