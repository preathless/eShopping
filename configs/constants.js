/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 24, 2017
 */

// Environment
const ENV = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test'
};

// Port
const PORT = 3000;
const TEST_PORT = 8000;

// Routes
const ROUTES = {
  ROOT:     '/',
  // Front-End
  SIGNIN:   '/signin',
  SIGNOUT:  '/signout',
  SIGNUP:   '/signup',
  HOME:     '/home',
  INDEX:    '/index',
  CONTACT:  '/contact',
  SHOP:     '/shop',
  PROD:     '/prod',
  CHECKOUT: '/checkout',
  CART:     '/cart',
  404:      '/404',
  BLOG:     '/blog',
  BLOGSG:   '/blogsingle',
  // Back-End
  DASHBOARD:    '/dashboard',
  REGISTER:     '/register',
  FORGOT:       '/forgot',
  ERROR404:     '/404',
  LOGIN:        '/login'
};

const RENDER = {
  _DASHBOARD:   'backend/index',
  _LOGIN:       'backend/authenticate/login',
  _REGISTER:    'backend/authenticate/register',
  _FORGOT:      'backend/authenticate/forgot-password'
};

// DB Connection String
const CONNECTION_STR = 'mongodb://localhost:27017/eShopping';

// Export Module
module.exports = {
  ENV,
  PORT,
  TEST_PORT,
  ROUTES,
  RENDER,
  CONNECTION_STR
}
