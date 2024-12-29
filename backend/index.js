require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('welcom to my first backend project')
})

app.get('/talib', (req, res) => {
    res.send('welcom mr talib')
  })

app.get('/login', (req, res) => {
    res.send('<h1>Welcome to login page</h1>')
})

app.get('/register', (req, res) => {
    res.send('<h1>Welcome to register page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

