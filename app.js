// ----- require packages -----
const express = require('express')
const app = express()

// ----- define relative variables -----
const port = 3000

// ----- define routes -----
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ----- start to listen on port -----
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})