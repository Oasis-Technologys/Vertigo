// set express value
var express = require('express');

// create express instance
var app = express();

// create path constant
const path = require('path');

// set view engine to ejs for partials
app.set('view engine', 'ejs');

// App Route / (Home)
app.get('/', (request, response) => {
    response.render('index', {
      subject: 'Vertigo Robotics',
      name: 'Home',
      link: 'https://google.com'
    });
  });


// Start Application
app.listen(3000, function () {
  console.clear();
  console.log('Vertigo By Oasis Interactive\n[+] Running');

});