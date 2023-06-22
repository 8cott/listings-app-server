// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('./config/db')
const Listing = require('./models/listing')

// CONFIGURATION
require('dotenv').config({ path: './.env' })
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ROUTES
app.get('/', (req, res) => {
  res.redirect('/listings');
});

// LISTINGS
const listingsController = require('./controllers/listings_controller.js');
app.use('/listings', listingsController);

// 404 Page
app.use('*', (req, res) => {
    res.send('404')
  })  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
})

module.exports = app;