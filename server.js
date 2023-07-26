// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors'); 
const authRoute = require('./routes/AuthRoute');
const listingsController = require('./controllers/listings_controller.js');
const path = require('path'); 
const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:5173'];

// CONFIGURATION
require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, 'client/dist')));

// Enable CORS
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
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
app.use('/listings', listingsController);

// Catch-all route for any other requests, serve the front-end HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
});

module.exports = app;
