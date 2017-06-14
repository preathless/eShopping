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
        BLOGSG,
        DASHBOARD,
        USER,
        TABLE,
        ICONS,
        MAPS,
        TYPOGRAPHY,
        CATE
      } = require('../configs/constants').ROUTES;

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('../configs/passport');
const RequireAuthenticated = passportConfig.isAuthenticated;

// Home Page
router.get(ROOT, homeCtrl.getIndex);
router.get(HOME, homeCtrl.getIndex);
router.get(INDEX, homeCtrl.getIndex);

// Authentication
router.get(SIGNIN, authCtrl.getSignIn);
router.post(SIGNIN, authCtrl.postSignIn);
router.get(SIGNOUT, authCtrl.signOut);
router.post(SIGNUP, authCtrl.signUp);


// Contact
router.get(CONTACT, iCrtl.getContact);

// Cart
router.get(CART, iCrtl.getCart);

// Shop
router.get(SHOP, iCrtl.getShop);
router.get(PROD, iCrtl.getProductDetails);
router.get(CHECKOUT, iCrtl.getCheckout);

// Dashboard
router.get(DASHBOARD, iCrtl.getDashboard);
router.get(USER, iCrtl.getUser);
router.get(MAPS, iCrtl.getMaps);
router.get(ICONS, iCrtl.getIcons);
router.get(TABLE, iCrtl.getTable);
router.get(TYPOGRAPHY, iCrtl.getTypography);
router.get(CATE,iCrtl.getCategory);
router.post('/createCate', iCrtl.createCategory)

// Kit
router.get('/main', (req, res) => {
  res.render('backend')
});

router.get('/login', (req, res) => {
  res.render('backend/authenticate/login')
});

router.get('/register', (req, res) => {
  res.render('backend/authenticate/register')
});

router.get('/forgot', (req, res) => {
  res.render('backend/authenticate/forgot-password')
});

router.get('/404', (req, res) => {
  res.render('backend/errors/error-404')
});

module.exports = router;