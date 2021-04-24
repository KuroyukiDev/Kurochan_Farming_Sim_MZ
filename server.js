const express = require('express')
const app = express()
const port =  process.env.PORT || 8080

app.use(express.static(__dirname + '/'))

app.get('/download', (req, res) => {
  res.sendFile('./game_dl.html', { root: __dirname })
})

app.get('/devlogs', (req, res) => {
  res.sendFile('./devlog_main.html', { root: __dirname })
})


app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

app.get('*', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`App running on PORT: ${port}`)
})