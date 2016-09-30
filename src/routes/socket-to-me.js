const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const message = req.query.message
  res.io.emit('socket-to-me', message)
  res.send(message)
})

module.exports = router
