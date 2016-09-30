const express = require('express')
const makeModel = require('./make-model')

const router = express.Router()

router.get('/',
  (req, res) => {
    res.render('login', makeModel(null, req.headers.host))
  })

module.exports = router
