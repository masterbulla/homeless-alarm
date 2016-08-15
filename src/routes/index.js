var express = require('express');
var router = express.Router();
var featureToggles = require('../infrastructure/feature-toggles');

if (featureToggles.isFeatureEnabled('authentication')) {
  router.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    render);
}
else {
  router.get('/',
    render);
}

function render(req, res, next) {
  var model = require('./model')(req.user);
  res.render('index', model);
}

module.exports = router;
