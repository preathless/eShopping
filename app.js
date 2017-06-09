// Required Lib
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(session);
const router = require('./routes/MappingRoutes');

// Variable
const app = express();
const appPort = 3000;

// Init
app.set('port', appPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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