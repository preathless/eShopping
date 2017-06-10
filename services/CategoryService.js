const User = require('../models/User');

const getCategories = () => {
    return User.find({});
};

const getUsers = () => {
    return User.find({name: 'dung'});
};

module.exports = {
    getCategories,
    getUsers,
};