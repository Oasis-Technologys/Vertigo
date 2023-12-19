var express = require('express');
var app = express();
const path = require('path');



app.get('/', function (req, res) {
  const filePath = path.resolve(__dirname, 'views/index.html');
  res.sendFile(filePath);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});