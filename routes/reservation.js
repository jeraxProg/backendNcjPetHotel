const express = require('express')
const {
    createReservation,
    getReservations,
    getReservation,
    updateReservation,
    deleteReservation
}  = require('../controllers/reserveController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Get all Reservations
router.get('/', getReservations)

//Get a single Reservation
router.get('/:id', getReservation)


//Post a new reservation
router.post('/', createReservation)

// require auth for all Reservation Routes
router.use(requireAuth)


//Delete a reservation
router.delete('/:id', deleteReservation)

//Update a reservation
router.patch('/:id', updateReservation) 

module.exports = router