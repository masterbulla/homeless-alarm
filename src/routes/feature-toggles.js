const express = require('express')
const makeModel = require('./make-model')
const featureToggles = require('../infrastructure/feature-toggles')

const router = express.Router()

router.get('/', (req, res) => {
  const model = makeModel()
  model.toggles = JSON.stringify(featureToggles._toggles, null, 2)
  res.render('feature-toggles', model)
})

module.exports = router
