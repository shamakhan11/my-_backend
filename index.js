require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('shama khan')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>shama and code</h2>')
})
app.get('/login', (req,res) => {
    res.send('<h1>please login here</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})