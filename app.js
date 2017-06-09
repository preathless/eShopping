// Required Lib
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(session);
const router = require('./routes/MappingRoutes');
const seeder = require('./helpers/seeder');
const chalk = require('chalk');

// Variable
const app = express();
const appPort = 3000;

// Init
app.set('port', appPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/eShopping', (error) => {
  if (error) {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  } else {
    console.log('%s Connect to MongoDB success.', chalk.red('✗'));
  }

  // Feed some data in DB
  seeder.createUsers();
});

/**
 * Serve static files
 */
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * App routes
 */
app.use('/', router);

/**
 * 404
 */
app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(appPort, () => {
  console.log(`App is running at port: ${appPort}`);
});

module.exports = app;