const express = require('express');
const router = express.Router();
const taskList = require('./taskList.json');
const fs = require('fs');

router.post('/add', (req, res) => {
  const { description } = req.body;

  const taskList = JSON.parse(fs.readFileSync('./taskList.json', 'utf8'));

  const newTask = {
    "id": taskList.length + 1,
    "description": description,
    completed: false
  };

  taskList.push(newTask);

  fs.writeFileSync('./taskList.json', JSON.stringify(taskList));

  res.json(taskList);
})

router.delete('/delete', (req, res) => {
  const { id } = req.query;

  const taskList = JSON.parse(fs.readFileSync('./taskList.json', 'utf8'));

  let updatedTaskList = taskList.filter(task => task.id !== parseInt(id));

  fs.writeFileSync('./taskList.json', JSON.stringify(updatedTaskList));

  res.json(updatedTaskList);
})

router.put('/update', (req, res) => {
  const { id, description, completed } = req.body;

  let updatedTask = taskList.filter(task => task.id === parseInt(id));

  if (!description) {
    updatedTask[0].description;
  } else {
    updatedTask[0].description = description;
  }

  if (!completed) {
    updatedTask[0].completed;
  } else {
    updatedTask[0].completed = completed;
  }

  taskList.forEach(task => task.id === updatedTask.id ? task = updatedTask[0] : null);

  fs.writeFileSync('./taskList.json', JSON.stringify(taskList));
  
  res.json(taskList);
})

module.exports = router;