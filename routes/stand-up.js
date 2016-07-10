var express = require('express');
var router = express.Router();

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res, next) {
    res.send({ message: 'TODO' });
  });

module.exports = router;
