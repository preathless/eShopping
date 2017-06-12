const Cate = require('../models/Category');

const getCategories = () => {
    return Cate.find({});
};

const createCategory = (cateInfo) => {
    cateInfo.activeFlag = true;
    cateInfo.deleteFlag = false;
    // Return promise
    return Cate.create(cateInfo); 
};

module.exports = {
    getCategories,
    createCategory
};