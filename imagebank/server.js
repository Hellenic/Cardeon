var express = require('express');
var helmet = require('helmet');

var images = require('./images.json');

var app = express();
app.use(helmet());
app.use(express.static(__dirname + '/images'));

app.get('/', function (req, res) {
  res.send(images);
});

var port = 7993;
app.listen(port);

console.log(`Image bank server up and running on port ${port}! ==> http://localhost:${port}/`);
