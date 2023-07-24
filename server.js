// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('./config/db')
const cookieParser = require('cookie-parser');
const cors = require('cors');  // Add this line
const authRoute = require('./routes/AuthRoute');
const listingsController = require('./controllers/listings_controller.js');

// CONFIGURATION
require('dotenv').config({ path: './.env' })
const PORT = process.env.PORT
const app = express()

// Enable CORS
// Remove the previous CORS setup and replace with the cors package configuration
app.use(cors({
  origin: process.env.CLIENT_URL,  // This is your client URL
  credentials: true,  // This allows cookies to be sent
  optionsSuccessStatus: 200,  // Some legacy browsers choke on a 204 status
}));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser());

// ROUTES
app.use('/', authRoute);
app.get('/', (req, res) => {
  res.redirect('/listings');
});

// LISTINGS
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
