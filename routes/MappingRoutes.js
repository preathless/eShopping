/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 25, 2017
 */
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');
const authController = require('../controllers/AuthController');
const interfaceController = require('../controllers/InterfaceController');

const { ROOT,
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
        BLOGSG
      } = require('../configs/constants').ROUTES;

/**
 * API keys and Passport configuration.
 */
// const passportConfig = require('../configs/passport');
// const RequireAuthenticated = passportConfig.isAuthenticated;

// Home Page
router.get(ROOT, homeController.getIndex);
router.get(HOME, homeController.getIndex);
router.get(INDEX, homeController.getIndex);

// Authentication
router.get(SIGNIN, authController.getSignIn);
router.post(SIGNIN, authController.postSignIn);
router.get(SIGNOUT, authController.signOut);
router.post(SIGNUP, authController.signUp);


// Contact
router.get(CONTACT, interfaceController.getContact);

// Cart
router.get(CART, interfaceController.getCart);

// Shop
router.get(SHOP, interfaceController.getShop);
router.get(PROD, interfaceController.getProductDetails);
router.get(CHECKOUT, interfaceController.getCheckout);

module.exports = router;
