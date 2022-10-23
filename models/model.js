const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    companyName: {
        required: true,
        type: String
    },

    headOffice: {
        required: true,
        type: String
    },

    phone: {
        required: true,
        type: Number
    },

    email: {
        required: true,
        type: String
    },

    numberOfEmployees: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)