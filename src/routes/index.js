const express = require('express')
const featureToggles = require('../infrastructure/feature-toggles').featureToggles
const makeModel = require('./make-model')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()

const router = express.Router()

function render(req, res) {
  res.render('index', makeModel(req.user, req.headers.host))
}

if (featureToggles.isFeatureEnabled('authentication')) {
  router.get('/', ensureLoggedIn, render)
} else {
  router.get('/', render)
}

module.exports = router
