const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    petname: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    typeOfPet: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Reservation', reservationSchema)

