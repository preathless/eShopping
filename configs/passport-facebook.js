/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 24, 2017
 */
const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');
const configAuth = require('../configs/auth.js');

const {
        ROOT,
        LOGIN
      } = require('../configs/constants').ROUTES;

/**
 * Sign in using Facebook Authenticate
 */
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new FacebookStrategy({
    //- Facebook authenticate info
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL
},
//- Facebook will send back the token and profile.
function(token, refreshToken, profile, done) {
    //- Asynchronous
    process.nextTick(function() {
        //- Find the user in the database based on their facebook id.
        User.findOne({'facebook.id' : profile.id}, function(err, user) {
            //- If there is an error, stop everything and return that.
            if (err)
                return done(err);
            //- if the user is found, then log them in.
            if (user) {
                return done(null, user); //- User found, return that user.
            } else {
                //- If there is no user found with that Facebook ID, create them.
                var newUser = new User();
                //- Generl Infomation
                //- Set all of the facebook information in our user model.
                newUser.facebook.id    = profile.id; //- Set the users facebook id.
                newUser.facebook.token = token; //- We will save the token that facebook provides to the user.
                newUser.facebook.name  = profile.displayName; //- Look at the passport user profile to see how names are returned.
                newUser.facebook.email = 'preathless@gmail.com';//- profile.emails[0].value; //- Facebook can return multiple emails so we'll take the first.
                //- Save our user to the database.
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    //- if successful, return the new user
                    return done(null, newUser);
                });
            }
        });
    });
}));