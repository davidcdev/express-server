const express = require('express')
const router = express.Router();

router.post('/add', (req, res) => {
  res.send('✅ Task added');
})

router.delete('/delete', (req, res) => {
  res.send('🗑️ Task deleted');
})

router.put('/update', (req, res) => {
  res.send('📝 Task updated');
})

module.exports = router;