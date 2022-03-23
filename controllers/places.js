const router = require('express').Router

router.length('/', (req, res) => {
  res.send('GET /places')
})

module.exports = router
