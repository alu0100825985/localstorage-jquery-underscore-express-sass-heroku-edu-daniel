var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/tests'));
app.use(express.static(__dirname + '/Views'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/Views/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
