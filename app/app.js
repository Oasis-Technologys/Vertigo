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

app.get('/login',(request,response)=>{
    response.render('login',{
      subject: 'Login',
      Name: 'User Login',
      Link: '/'
    });
});

const port = 2000;
const addr = "http://localhost:2000"
// Start Application
app.listen(port, function () {
  console.clear();
  console.log('Vertigo By Oasis Interactive\n[+] Running on port',port,"\n[ADDR]",addr);

});