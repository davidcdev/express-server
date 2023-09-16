import { Router } from 'express';
import fs from 'fs';
import { handleEditError } from '../middlewares/handleEditError.js';

export const editTasksList = Router();

editTasksList.use(handleEditError);

const taskList = JSON.parse(fs.readFileSync('./taskList.json', 'utf8'));

editTasksList.post('/add', (req, res) => {
  const { description } = req.body;

  const newTask = {
    "id": taskList.length + 1,
    "description": description,
    completed: false
  };

  taskList.push(newTask);

  fs.writeFileSync('./taskList.json', JSON.stringify(taskList));

  res.status(201).json(taskList);
});

editTasksList.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  taskList.splice(id - 1, 1);

  fs.writeFileSync('./taskList.json', JSON.stringify(taskList));

  res.status(200).json(taskList);
});

editTasksList.put('/update/:id', (req, res) => {
  const id = req.params.id;

  const { description, completed } = req.body;
  console.log(id, description, completed)

  if (description) {
    taskList.forEach(task => {
      if (task.id === parseInt(id)) task.description = description;
    })
  }
  
  if (completed !== undefined) {
    taskList.forEach(task => {
      if (task.id === parseInt(id)) task.completed = completed;
    })
  };

  fs.writeFileSync('./taskList.json', JSON.stringify(taskList));

  res.status(200).json(taskList);
});
