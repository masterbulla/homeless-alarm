var express = require('express');
var router = express.Router();

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res, next) {
    var model = require('./model')(req.user);
    res.render('index', model);
  });

module.exports = router;
