const express = require('express');

const app = express();
app.use(express.json());

const viewTasksList = require('./list-view-router.js');
const editTasksList = require('./list-edit-router.js');

app.use('/view-list', viewTasksList);
app.use('/edit-list', editTasksList);

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`);
});
