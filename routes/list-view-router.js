import { Router } from 'express';
import taskList from '../taskList.json' assert { type: 'json' };
import { handleParamsError } from '../middlewares/handleParamsError.js';

export const viewTasksList = Router();

viewTasksList.use(handleParamsError);

viewTasksList.get('/', (req, res) => {
  const { completed } = req.query;

  let filteredTaskList;

  if (completed === 'true') {
    filteredTaskList = taskList.filter(task => task.completed === true);
  } else {
    filteredTaskList = taskList.filter(task => task.completed === false);
  }

  res.status(200).json(filteredTaskList);
});
