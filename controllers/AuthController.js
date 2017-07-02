/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 25, 2017
 */
const async = require('async');
const crypto = require('crypto');
const passport = require('passport');
const User = require('../models/User');
const authService = require('../services/AuthService');
const {
        ROOT, 
        SIGNIN, 
        LOGIN, 
        REGISTER, 
        FORGOT, 
        DASHBOARD} = require('../configs/constants').ROUTES;
const {
        _DASHBOARD,
        _LOGIN,
        _FORGOT,
        _REGISTER
      } = require('../configs/constants').RENDER;
/**
 * GET /signin
 * SignIn page.
 */
const getSignIn = (req, res) => {
  if (req.user) {
    return res.redirect(ROOT);
  }
  res.render('login', {
    title: 'Sign In'
  });
};

/**
 * POST /login
 * Sign in using email and password.
 */
const postSignIn = (req, res, next) => {
  req.assert('email', 'Email is not valid.').isEmail();
  req.assert('password', 'Password cannot be blank.').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect(LOGIN);
  }

  passport.authenticate('local', {session : false}, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('errors', info);
      return res.redirect(LOGIN);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || DASHBOARD);
    });
  })(req, res, next);
};

/**
 * GET /signOut
 * Sign out.
 */
const getSignOut = (req, res) => {
  req.logout();
  res.redirect(LOGIN);
};

/**
 * GET /signup
 * Signup page.
 */
const getSignUp = (req, res) => {
  if (req.user) {
    return res.redirect(ROOT);
  }
  res.render('backend/authenticate/login');
};

const postSignUp = (req, res) => {
  //- Get user information
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const repeatPassword = req.body.passwordCheck;

  //- Create user instance
  const usrInfo = {
    username,
    email,
    password,
  };

  //- Call serivce to create
  authService.createNewUser(usrInfo)
    .then((user) => {
      res.redirect(LOGIN);
    })
    .catch((error) => {
      console.log(`Error: `, error.message);
      res.render(_LOGIN);
    })
};

const getLogin = (req, res) => {
  res.render(_LOGIN);
}

const getRegister = (req, res) => {
  res.render(_REGISTER);
}

const getForgotPassword = (req, res) => {
  res.render(_FORGOT);
}

module.exports = {
  getSignIn,
  postSignIn,
  getSignUp,
  getSignOut,
  postSignUp,
  //- Back-End
  getLogin,
  getRegister,
  getForgotPassword
};
