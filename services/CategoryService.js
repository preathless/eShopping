const Category = require('../models/Category');

const getCategories = () => {
    return Category.find({});
};

const getCategoryParent = () => {
    return Category.find({}, "cateId cateNm catePrnt");
};


const createCategory = (cateInfo) => {
    cateInfo.activeFlag = true;
    cateInfo.deleteFlag = false;
    // Return promise
    return Cate.create(cateInfo); 
};

module.exports = {
    getCategories,
    getCategoryParent,
    createCategory
};