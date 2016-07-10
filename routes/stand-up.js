var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('./schemas');

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res, next) {
    var StandUp = mongoose.model('StandUp', schemas.standUpSchema);
    StandUp.findOne({ username: req.user.username }, function (error, standUp) {
      res.send(standUp);
    });
    /*
    var data = require('../data/stand-up.json');
    var standUp = new StandUp(data);
    standUp.save(function (error, standUp) {
      if (error) {
        console.log('err: ' + JSON.stringify(error));
      }
      else {
        console.log('a standUp w/ id: ' + standUp._id + ' has been successfully saved');
      }
    });
    res.send(data);
    */
  });

module.exports = router;
