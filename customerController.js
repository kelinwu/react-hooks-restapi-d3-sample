const express = require('express')
const router = express.Router();
const Customer = require('./customerModel')

// @route GET api/customers
// @desc GET all customers
// @access private
router.get('/', [], async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

// @route GET api/weatherAPI
// @desc GET weather data and update weatherLog table
// @access public
router.get('/weatherAPI', async (req, res) => {
    try {
        // const res = xxxx
        // store info to weatherLog
    } catch (error) {
        
    }
})


router.post('/', [], async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.delete('/', [], async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})


module.exports = router