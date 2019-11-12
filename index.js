require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`Webhook listening on port ${port}!`)
})

app.post('/webhook', (req, res) => {
  console.log(req.body)

  if (req.headers.authorization === process.env.verification_token) {
    res.status(200)
    res.send()
  } else {
    res.send('Unauthorized request to Webhook.')
  }
})

app.listen(port, () => console.log(`Webhook listening on port ${port}!`))
