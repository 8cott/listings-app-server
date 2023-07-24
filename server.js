// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/AuthRoute');
const listingsController = require('./controllers/listings_controller.js');

// CONFIGURATION
require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT;
const app = express();

// Enable CORS using the allowCors middleware
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

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
app.use('/listings', allowCors(listingsController));

// 404 Page
app.use('*', (req, res) => {
  res.send('404');
});

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
});

module.exports = app;
