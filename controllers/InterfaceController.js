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

module.exports = {
  getCart,
  getShop,
  getProductDetails,
  getContact,
  getCheckout,
  getDashboard
}
