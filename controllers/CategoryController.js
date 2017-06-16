const Category = require("../models/Category");

/**
 * This function for handle /api/categories
 * Get all categories with filter
 *
 * @param {*} req
 * @param {*} res
 */
const getCategories = (req, res) => {
    Category.find({
            $and: [
                {"cateNm": new RegExp(req.query.cateNm)},
                {"catePrnt": new RegExp(req.query.catePrnt)}
            ]
        })
        .then((categories) => {
            console.log(`Then categories: `, categories);
            res.json(categories);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
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
 * Create category
 *
 * @param {*} req
 * @param {*} res
 */
const createCategory = (req, res) => {
    const creatingCate = req.body;
    Category.create(creatingCate)
        .then((cat) => {
            res.json(cat);
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
    console.log(`deleteCategory: `, req.body);
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
};