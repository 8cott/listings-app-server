// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('./config/db')
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/AuthRoute');
const path = require('path');
const cors = require('cors');

// CONFIGURATION
require('dotenv').config({ path: './.env' })
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser());

// Enable CORS
app.use(cors({
  origin: true,
  credentials: true
}));

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use('/', authRoute);

// LISTINGS
const listingsController = require('./controllers/listings_controller.js');
app.use('/listings', listingsController);

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}  

// 404 Page
app.use((req, res, next) => {
  if (!req.route) {
    res.status(404).send('404');
  } else {
    next();
  }
});

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
})

module.exports = app;
