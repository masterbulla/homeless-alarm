const express = require('express')
const makeModel = require('./make-model')

const router = express.Router()

router.get('/',
  (req, res) => {
    res.render('login', makeModel())
  })

module.exports = router
