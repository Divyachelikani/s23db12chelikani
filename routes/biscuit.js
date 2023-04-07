var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('biscuit', { title: 'Search Results biscuit' });
});

module.exports = router;

