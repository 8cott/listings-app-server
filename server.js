// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors'); 
const authRoute = require('./routes/AuthRoute');
const listingsController = require('./controllers/listings_controller.js');

// CONFIGURATION
require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT;
const app = express();

app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  console.log('CLIENT_URL:', process.env.CLIENT_URL);
  next();
});

// Enable CORS
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true, 
  optionsSuccessStatus: 200,
  https: true,
}));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
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
  res.send('404');
});

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
});

module.exports = app;
