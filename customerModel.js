const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: String,
    contact: String,
    phone: String,
    location: String,
    noOfEmployee: Number
})

module.exports = mongoose.model('Customer', CustomerSchema)