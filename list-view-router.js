const express = require('express')
const router = express.Router();

router.get('/completed', (req, res) => {
  res.send('✅ Completed Tasks list');
})

router.get('/pending', (req, res) => {
  res.send('📌 Pending Tasks list');
})

module.exports = router;