const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });
mongoose.set('strictQuery', true);

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;