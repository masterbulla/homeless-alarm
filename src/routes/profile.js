const express = require('express')
const makeModel = require('./make-model')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()

const router = express.Router()

router.get('/',
  ensureLoggedIn,
  (req, res) => {
    res.render('profile', makeModel(req.user))
  })

module.exports = router
