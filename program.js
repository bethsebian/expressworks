var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('h1 Hello World!')
})
app.listen(process.argv[2])



app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
