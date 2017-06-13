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
const interfaceCtrl = require('../controllers/InterfaceController');

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
router.get(CONTACT, interfaceCtrl.getContact);

// Cart
router.get(CART, interfaceCtrl.getCart);

// Shop
router.get(SHOP, interfaceCtrl.getShop);
router.get(PROD, interfaceCtrl.getProductDetails);
router.get(CHECKOUT, interfaceCtrl.getCheckout);

// Dashboard
router.get(DASHBOARD, interfaceCtrl.getDashboard);
router.get(USER, interfaceCtrl.getUser);
router.get(MAPS, interfaceCtrl.getMaps);
router.get(ICONS, interfaceCtrl.getIcons);
router.get(TABLE, interfaceCtrl.getTable);
router.get(TYPOGRAPHY, interfaceCtrl.getTypography);
router.get(CATE,interfaceCtrl.getCategory);
router.post('/createCate', interfaceCtrl.createCategory)

// Kit
router.get('/main', (req, res) => {
  res.render('index')
});

module.exports = router;