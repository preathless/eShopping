const getCart = (req, res) => {
  res.render('cart', {title: ''});
};

const getShop = (req, res) => {
  res.render('shop', {title: ''});
};

const getProductDetails = (req, res) => {
  res.render('product-details', {title: ''});
};

const getContact = (req, res) => {
  res.render('contact', {title: ''});
};

const getCheckout = (req, res) => {
  res.render('checkout', {title: ''});
};

// ADMIN
const getDashboard = (req, res) => {
  res.render('back-end/dashboard', {title: 'Dashboard'});
}
const getUser = (req, res) => {
  res.render('back-end/user', {title: 'User'});
}
const getIcons = (req, res) => {
  res.render('back-end/icons', {title: 'Icons'});
}
const getMaps = (req, res) => {
  res.render('back-end/maps', {title: 'Maps'});
}
const getTable = (req, res) => {
  res.render('back-end/table', {title: 'Table'});
}
const getTypography = (req, res) => {
  res.render('back-end/typography', {title: 'Typography'});
}

module.exports = {
  getCart,
  getShop,
  getProductDetails,
  getContact,
  getCheckout,
  getDashboard,
  getUser,
  getIcons,
  getMaps,
  getTable,
  getTypography
}
