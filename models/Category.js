/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 24, 2017
 */
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cateSchema = new mongoose.Schema({

  cateId:       {type: String, unique: true},
  cateNm:       {type: String},
  cateLevel:    {type: String},
  catePrnt:     {type: String},

  deleteFlag:   {type: Boolean, default: false},
  activeFlag:   {type: Boolean, default: true}
  
}, {timestamps: true });

cateSchema.pre('save', function save(next) {
  next();
});

const Cate = mongoose.model('Category', cateSchema);

module.exports = Cate;
