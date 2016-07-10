var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res, next) {
    res.render('index', model);
  });

module.exports = router;
