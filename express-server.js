const express = require('express')

const app = express()

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
  console.log('Server is listening on port 3000')
})
