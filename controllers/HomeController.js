const cateService = require('../services/CategoryService');

const getIndex = (req, res, next) => {
  Promise.all([cateService.getCategories(), cateService.getUsers()])
    .then((data) => {
      let categories = data[0];
      let users = data[1];
      res.render('index', {title: '', categories, users});
    })
    .catch((err) => {
      next(err);
    })
};

module.exports = {
  getIndex,
}
