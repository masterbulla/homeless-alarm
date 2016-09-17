const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

router.get('/', (req, res) => {
  const uri = `http://api.openweathermap.org/data/2.5/weather?q=${req.query.q}&appid=${process.env.OPENWHEATERMAP_APPID}&units=metric`
  fetch(uri)
    .then(response => (response.json()))
    .then((json) => {
      res.send(json)
    })
    .catch((exception) => {
      throw new Error(`exception ${exception}`)
    })
})

module.exports = router
