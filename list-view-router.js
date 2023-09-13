const express = require('express')
const router = express.Router();
const taskList = require('./taskList.json');

router.get('/completed', (req, res) => {
  const completedTasks = taskList.filter(task => task.completed === true);

  res.json(completedTasks);
})

router.get('/pending', (req, res) => {
  const pendingTasks = taskList.filter(task => task.completed === false);

  res.json(pendingTasks);
})

module.exports = router;