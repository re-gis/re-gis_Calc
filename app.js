const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

// Bodyparser stuff
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


// Routes
app.use('/', require('./routes/routes'))


app.listen(process.env.PORT, () => {
    console.log(`Server listening port ${process.env.PORT}...`);
})