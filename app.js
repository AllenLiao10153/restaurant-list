// ----- require packages -----
const express = require('express')
const app = express()

const {engine} = require('express-handlebars')
app.engine('hbs', engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

const db = require('./models')
const { raw } = require('mysql2')
const Restaurant = db.Restaurant

// ----- define relative variables -----
const port = 3000

// ----- define routes -----
app.use(express.static('public'))

// create restaurant
app.get('/restaurants/new', (req, res) => {
  res.send('create page.')
})

app.post('/restaurants/', (req, res) => {
  res.send('restaurant has been created.')
})

// read restaurant
app.get('/', (req, res) => {  // modify route "/restaurants" to "/" to take this page as index page
  return Restaurant.findAll({
    attributes: ['id', 'name', 'category', 'image', 'rating'],
    raw: true })
    .then(restaurants => res.render('index', {restaurants}))
    .catch(error => res.status(422).json(error))
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findByPk(id, {
    attributes: ['id', 'name', 'category', 'image', 'location', 'google_map', 'phone', 'description'],
    raw: true
  })
    .then(restaurant => res.render('show', {restaurant}))
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