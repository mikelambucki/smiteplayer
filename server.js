require('dotenv').config()
const express = require("express"),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 3000,
  axios = require('axios'),
  cors = require('cors'),
  CryptoJS = require("crypto-js"),
  API = require('./auth.js');

//view engine settings
app.set('views', './public/views');
app.set('view engine', 'pug');


//have to white list clients and host
app.use(cors());
//static folder, want to do dynamic website
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/bower_components',express.static(path.join(__dirname,'/bower_components')));

//createsession route
app.use('/api', require('./public/routes/api'));

//will need body parser middleware when we get form submissions and POST reqs
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//middle-ware proxy to get around potential CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function (req, res) {
    //starts at index html which includes script api.js
    //api js then uses 'fetch' to access /createsession route
    res.render('index');
    res.end();
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});