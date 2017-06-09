const getLogin = (req, res) => {
  res.render('login', {title: 'Login to System'});
};

const postLogin = (req, res) => {
  res.render('login', {title: 'Login to System'});
};

module.exports = {
  getLogin,
  postLogin
}
