const Category = require("../models/Category");
const cateService = require('../services/CategoryService')

const {
    CATEGORIES
} = require('../configs/constants').ROUTES;

const {
    _CATEGORIES
} = require('../configs/constants').RENDER;

/**
 * This function for handle /api/categories
 * Get all categories with filter
 *
 * @param {*} req
 * @param {*} res
 */
const getCategories = (req, res) => {
    Promise.all([cateService.getCategoryParent(), cateService.getCategories()])
        .then((data) => {
            let cateParents = data[0];
            let categories = data[1];
            res.render(_CATEGORIES, {cateParents, categories});
        })
        .catch((err) => {
            next(err);
        })
}

/**
 * This function for handle /api/categories
 * Get all categories with filter
 *
 * @param {*} req
 * @param {*} res
 */
const getCategoryParent = (req, res) => {
    Promise.all([cateService.getCategoryParent()])
        .then((cateParents) => {
            res.render(_CATEGORIES, {cateParents});
        })
        .catch((err) => {
            next(err);
        })
};

/**
 * This function for handle /api/categories
 * Create category
 *
 * @param {*} req
 * @param {*} res
 */
const createCategory = (req, res) => {
  let cateId = req.body.cateId;
  let cateNm = req.body.cateNm;
  let cateLevel = req.body.cateLevel;
  let catePrnt = req.body.catePrnt;

  //- Create user instance
  const cateInfo = {
    cateId,
    cateNm,
    cateLevel,
    catePrnt,
  };

  //- Call serivce to create
  cateService.createCategory(cateInfo)
    .then((cate) => {
      Promise.all([cateService.getCategories()])
        .then((data) => {
            let categories = data[0];
            res.render(_CATEGORIES, {categories});
        })
        .catch((err) => {
            next(err);
        })
    })
    .catch((error) => {
        console.log(`Error: `, error.message);
        res.redirect(_CATEGORIES);
    })
};

/**
 * This function for handle /api/categories
 * Update category
 *
 * @param {*} req
 * @param {*} res
 */
const updateCategory = (req, res) => {
    const updatingCate = req.body;
    Category.update({ _id: updatingCate._id }, { $set: { cateNm: updatingCate.cateNm, catePrnt: updatingCate.catePrnt }})
        .then((_) => {
            res.json(updatingCate);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

/**
 * This function for handle /api/categories
 * Delete category
 *
 * @param {*} req
 * @param {*} res
 */
const deleteCategory = (req, res) => {
    Category.remove({ _id: req.body._id })
        .then(() => {
            res.json({message: 'Ok'});
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryParent
};