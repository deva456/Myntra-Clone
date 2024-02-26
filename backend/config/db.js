//const mongoose = require('mongoose');

//require('dotenv').config()

//const connection = mongoose.connect(process.env.mongoUrl)


//module.exports = {connection}

const mongoose = require('mongoose');

// Replace the uri string with your connection string.
const uri = 'mongodb://localhost:27017/mydb';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB database');
});