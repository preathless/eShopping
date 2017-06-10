// Require User
const User = require('../models/User');

const createNewUser = (userInfo) => {
    //console.log(req.body);
    userInfo.activeFlag = true;
    return User.create(userInfo); // Return promise
};

module.exports = {
    createNewUser
};


