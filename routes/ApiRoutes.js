/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 25, 2017
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const cateCtrl = require('../controllers/CategoryController');

const {
        CATEGORIES
      } = require('../configs/constants').API_ROUTES;

/**
 * Get Categories
 */
//- router.get(CATEGORIES, cateCtrl.getCategories);
router.route(CATEGORIES)
        .get(cateCtrl.apiGetCategories)
        .post(cateCtrl.apiCreateCategory)
        // .put(cateCtrl.updateCategory)
        // .delete(cateCtrl.deleteCategory);

router.get('/getCateParent', cateCtrl.getCategoryParent);

module.exports = router;