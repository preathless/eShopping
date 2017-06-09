/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 24, 2017
 */

const User = require('../models/User');

const createUsers = () => {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const admin = new User({
      email: 'dungnguyen@gmail.com',
      username: 'admin',
      password: '123456',
      profile: {
        name: 'Administrator',
        gender: 'Male',
        phone: '+01212119860',
      },
      deleteFlag: false,
      activeFlag: true,
      admin: true,
      publish: false,
    });

    User.create([admin], (error) => {
      if (!error) {
        console.log('The first user were created successfully!');
      }
    });
  });
};

module.exports = {
  createUsers,
};