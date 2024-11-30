require('dotenv').config()
const express = require('express')
const app = express()
const port = 2003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('tushar_bhatt')
})

app.get('/login', (req, res) => {
    res.send(`<h1>Please login at tushar's server</h1>`)
})

app.get('/chai', (req, res) => {
    res.send(`<h3>Chai pilo</h3>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})