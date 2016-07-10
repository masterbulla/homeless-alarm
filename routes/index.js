var express = require('express');
var router = express.Router();
var package = require('../package');

router.get('/', function (req, res, next) {
  res.render('index', { title: package.name + ' v' + package.version });
});

module.exports = router;
