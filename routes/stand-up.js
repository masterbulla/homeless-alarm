var express = require('express');
var router = express.Router();

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res, next) {
    var data = require('../data/stand-up.json');
    // todo: get data from mongodb
    
    res.send(data);
  });

module.exports = router;
