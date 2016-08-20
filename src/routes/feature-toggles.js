const express = require('express')
const makeModel = require('./make-model')

const router = express.Router()

router.get('/', (req, res) => {
  const model = makeModel()
  res.send(model.toggles)
})

module.exports = router
