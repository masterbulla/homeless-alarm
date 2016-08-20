const express = require('express')
const makeModel = require('./make-model')
const toggles = require('../infrastructure/feature-toggles').toggles

const router = express.Router()

router.get('/', (req, res) => {
  const model = makeModel()
  model.toggles = JSON.stringify(toggles, null, 2)
  // res.render('feature-toggles', model)
  res.send(model.toggles)
})

module.exports = router
