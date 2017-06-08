// Required Lib
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(session);

// Variable
const app = express();
const appPort = 3000;

// Init
app.set('port', appPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(appPort, () => {
  console.log(`App is running at port: ${appPort}`);
})

app.get('/home', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/cart', (req, res) => {
    res.render('cart');
})

app.get('/contact', (req, res) => {
    res.render('contact-us');
})

app.get('/admin', (req, res) => {
    res.render('dashboard');
})

/**
 * Serve static files
 */
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 3650 * 1000 }));
