// Required Lib
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(session);
const router = require('./routes/MappingRoutes');
const seeder = require('./helpers/seeder');
const chalk = require('chalk');
const appPort = require('./configs/constants').PORT;
const connStr = require('./configs/constants').CONNECTION_STR;

// Variable
const app = express();

// Init
app.set('port', appPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

// app.post('/signup', function(req, res) {
//     var username = req.body.username;
//     res.send(req.body);
//     res.send('<h1>Hello</h1> '+ username);
// });

// app.get('/signin', function(req, res) {
//     res.render('login');
// });

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(connStr, (error) => {
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

// /**
//  * App routes
//  */
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