/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 25, 2017
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeCtrl = require('../controllers/HomeController');
const authCtrl = require('../controllers/AuthController');
const iCrtl = require('../controllers/InterfaceController');

// Required Passport Middleware.
const as = require('../configs/passport-facebook');
const ab = require('../configs/passport');

const {
        // Front-End
        ROOT,
        SIGNIN,
        SIGNOUT,
        SIGNUP,
        HOME,
        INDEX,
        CONTACT,
        SHOP,
        PROD,
        CHECKOUT,
        CART,
        BLOG,
        BLOGSG,
        // Back-End
        AUTH_FB,
        AUTH_FB_CB,
        DASHBOARD,
        REGISTER,
        FORGOT,
        ERROR404,
        LOGIN
      } = require('../configs/constants').ROUTES;

const {_DASHBOARD} = require('../configs/constants').RENDER;

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get(AUTH_FB, passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get(AUTH_FB_CB, passport.authenticate('facebook', {
    successRedirect : DASHBOARD,
    failureRedirect : LOGIN
}));


// Home Page
router.get(ROOT, homeCtrl.getIndex);
router.get(HOME, homeCtrl.getIndex);
router.get(INDEX, homeCtrl.getIndex);

// Authentication
// router.get(SIGNIN, authCtrl.getSignIn);
router.post(SIGNIN, authCtrl.postSignIn);
router.post(SIGNUP, authCtrl.postSignUp);
router.get(SIGNOUT, authCtrl.getSignOut);

// Contact
router.get(CONTACT, iCrtl.getContact);

// Cart
router.get(CART, iCrtl.getCart);

// Shop
router.get(SHOP, iCrtl.getShop);
router.get(PROD, iCrtl.getProductDetails);
router.get(CHECKOUT, iCrtl.getCheckout);

// Back-End
router.get(DASHBOARD, require('../configs/passport').isAuthenticated, (req, res) => {
  res.render(_DASHBOARD);
});

router.get(LOGIN, authCtrl.getLogin);
router.get(REGISTER, authCtrl.getRegister);
router.get(FORGOT, authCtrl.getForgotPassword);

module.exports = router;