// ----- require packages -----
const express = require('express')
const app = express()

const db = require('./models')
const Restaurant = db.Restaurant

// ----- define relative variables -----
const port = 3000

// ----- define routes -----
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create restaurant
app.get('/restaurants/new', (req, res) => {
  res.send('create page.')
})

app.post('/restaurants/', (req, res) => {
  res.send('restaurant has been created.')
})

// read restaurant
app.get('/restaurants', (req, res) => {
  return Restaurant.findAll({ raw: true })
    .then(restaurant => res.send(restaurant))
})

app.get('/restaurants/:id', (req, res) => {
  res.send(`read restaurant: ${req.params.id}.`)
})

// update restaurant
app.get('/restaurants/:id/edit', (req, res) => {
  res.send(`restaurant: ${req.params.id} edit page.`)
})

app.put('/restaurants/:id', (req, res) => {
  res.send(`restaurant: ${req.params.id} has been modified.`)
})

// delete restaurant
app.delete('/restaurants/:id', (req, res) => {
  res.send(`restaurant: ${req.params.id} has been deleted.`)
})

// ----- start to listen on port -----
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})