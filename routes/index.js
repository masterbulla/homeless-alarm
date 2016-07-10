var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/', function (req, res, next) {
  res.render('index', model);
});

module.exports = router;
