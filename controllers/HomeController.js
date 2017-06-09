const getIndex = (req, res) => {
  res.render('index', {title: ''});
};

module.exports = {
  getIndex,
}
