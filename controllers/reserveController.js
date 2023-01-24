const Reservation = require('../models/reservationModel')
const mongoose = require('mongoose');


//get all reservation
const getReservations = async (req, res) => {
    const reservations = await Reservation.find({}).sort({ createdAt: -1 })

    res.status(200).json(reservations)
}

//get a single reservation
const getReservation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Reservation found' })
    }


    const reservation = await Reservation.findById(id)

    if (!reservation) {
        return res.status(404).json({ error: 'No reservation found' })

    }

    res.status(200).json(reservation)
}

//create a reservation
const createReservation = async (req, res) => {
    const { name, email, petname, breed, size, phone, startDate, endDate, typeOfPet } = req.body

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!email) {
        emptyFields.push('email')
    }
    if (!petname) {
        emptyFields.push('petname')
    }
    if (!breed) {
        emptyFields.push('breed')
    }
    if (!typeOfPet) {
        emptyFields.push('typeOfPet')
    }
    if (!phone) {
        emptyFields.push('phone')
    }
    if (!size) {
        emptyFields.push('size')
    }
    if (!startDate) {
        emptyFields.push('startDate')
    }
    if (!endDate) {
        emptyFields.push('endDate')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Some fields are missing', emptyFields })
    }

    //add doc to db
    try {
        const reservation = await Reservation.create({ name, email, petname, breed, size, phone, startDate, endDate,typeOfPet })
        res.status(200).json(reservation)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a reservation
const deleteReservation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No reservation found' })
    }

    const reservation = await Reservation.findOneAndDelete({ _id: id })

    if (!reservation) {
        return res.status(404).json({ error: 'No reservation found' })
    }

    res.status(200).json(reservation)
}

//update a reservation
const updateReservation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No reservation found' })
    }
    const reservation = await Reservation.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!reservation) {
        return res.status(404).json({ error: 'No reservation found' })
    }
    res.status(200).json(reservation)

}


module.exports = {
    getReservations,
    getReservation,
    createReservation,
    deleteReservation,
    updateReservation
} 
