const mongoose = require('mongoose');

require('dotenv').config()

const {MONGO_URI} = process.env

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Database Connected')
})

module.exports = mongoose