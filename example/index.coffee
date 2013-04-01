express = require 'express'

app = express()
app.use express.favicon()
app.use express.logger 'dev'
app.use express.bodyParser()
app.use express.static(__dirname)
app.use express.static(__dirname + '/..')

app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'

app.get '/', (req, res) ->
  res.render 'index'

app.listen 4000, ->
  console.log 'http://dev:4000'
