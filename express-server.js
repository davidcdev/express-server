const express = require('express');
const { handleMethodError } = require('./middlewares');

const app = express();
app.use(express.json());


const viewTasksList = require('./list-view-router.js');
const editTasksList = require('./list-edit-router.js');

app.use(handleMethodError);

app.use('/view-list/', handleMethodError, viewTasksList);
app.use('/edit-list/', handleMethodError, editTasksList);

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`);
});
