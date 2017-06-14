/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 25, 2017
 */
const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/HomeController');
const authCtrl = require('../controllers/AuthController');
const iCrtl = require('../controllers/InterfaceController');

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
        DASHBOARD,
        REGISTER,
        FORGOT,
        ERROR404,
        LOGIN
      } = require('../configs/constants').ROUTES;

const {_DASHBOARD} = require('../configs/constants').RENDER;

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('../configs/passport');
// const requireAuthenticated = passportConfig.isAuthenticated;

// Home Page
// router.get(ROOT, homeCtrl.getIndex);
// router.get(HOME, homeCtrl.getIndex);
// router.get(INDEX, homeCtrl.getIndex);

// Authentication
// router.get(SIGNIN, authCtrl.getSignIn);
router.post(SIGNIN, authCtrl.postSignIn);
router.get(SIGNOUT, authCtrl.getSignOut);
router.post(SIGNUP, authCtrl.postSignUp);


// Contact
// router.get(CONTACT, iCrtl.getContact);

// Cart
// router.get(CART, iCrtl.getCart);

// Shop
// router.get(SHOP, iCrtl.getShop);
// router.get(PROD, iCrtl.getProductDetails);
// router.get(CHECKOUT, iCrtl.getCheckout);

// Back-End
router.get(DASHBOARD, require('../configs/passport').isAuthenticated, (req, res) => {
  res.render(_DASHBOARD);
});

router.get(LOGIN, authCtrl.getLogin);
router.get(REGISTER, authCtrl.getRegister);
router.get(FORGOT, authCtrl.getForgotPassword);

module.exports = router;