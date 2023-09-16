import 'dotenv/config'
import express from 'express';
import { handleMethodError } from './middlewares/handleMethodError.js'

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

import { editTasksList } from './routes/list-edit-router.js';
import { viewTasksList } from './routes/list-view-router.js';

app.use(handleMethodError);

app.use('/view-list/', viewTasksList);
app.use('/edit-list/', editTasksList);

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to Productive Day</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running...`);
});
