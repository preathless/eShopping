/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 24, 2017
 */

const ENV = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test'
};

const PORT = 3000;
const TEST_PORT = 8000;

const ROUTES = {
  ROOT:     '/',
  LOGIN:    '/login',
  HOME:     '/home',
  INDEX:    '/index',
  LOGOUT:   '/logout',
  CONTACT:  '/contact',
  SHOP:     '/shop',
  PROD:     '/prod',
  CHECKOUT: '/checkout',
  CART:     '/cart',
  404:      '/404',
  BLOG:     '/blog',
  BLOGSG:   '/blogsg'
};

module.exports = {
  ENV,
  PORT,
  TEST_PORT,
  ROUTES,
}
