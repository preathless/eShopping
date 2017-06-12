const cateService = require('../services/CategoryService');
const userService = require('../services/UserService');

const getIndex = (req, res, next) => {
  Promise.all([cateService.getCategories(), userService.getUsers()])
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
