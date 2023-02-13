const express = require('express')
const { addNumbers, multiplyNumbers } = require('../controllers/controller')
const router = express.Router()

// Addition
router.get('/add', addNumbers)

// Multiplication
router.get('/multiply', multiplyNumbers)

module.exports = router