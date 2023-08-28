const express = require('express')

const viewTasksList = require('./list-view-router.js')
const editTasksList = require('./list-edit-router.js')

const app = express()

app.use('/view-list', viewTasksList)
app.use('/edit-list', editTasksList)

app.get('/', (req, res) => {
  res.json(
    [
      { id: 1, description: 'Learn Node.js', completed: true },
      { id: 2, description: 'Learn Express', completed: true },
      { id: 3, description: 'Learn MongoDB', completed: false },
    ]
  )
})

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`)
})
