var express = require('express');
var helmet = require('helmet');

var images = require('./images.json');

var app = express();
app.use(helmet());
app.use(express.static(__dirname + '/images'));

app.get('/', function (req, res) {
  res.send(images);
});

app.listen(7979);

console.log("Image bank server up and running on port 7979! ==> http://localhost:7979/");
