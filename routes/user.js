const express = require('express');



//controller functions
const {   
    adminUser,
    loginUser,
    signupUser } = require('../controllers/userController')


const router = express.Router();


// admin login route
router.post('/admin', adminUser)

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)



module.exports = router