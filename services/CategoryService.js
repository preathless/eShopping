const User = require('../models/User');

const getCategories = () => {
    return User.find({});
};

const getUsers = () => {
    return User.find({});
};

module.exports = {
    getCategories,
    getUsers,
};