const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const routes = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/
const db = require('./models');

/**********
 * ROUTES *
 **********/
app.use(express.static('public'));

//HTML Endpoints
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/map', (req, res) => {
  res.sendFile(__dirname + '/views/map.html');
})

app.get('/list', (req, res) => {
  res.sendFile(__dirname + '/views/list.html');
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})

//JSON API Endpoints
app.use('/api', routes.api)
app.use('/api/heritage', routes.heritage);
app.use('/api/legacy', routes.legacy);


/**********
 * SERVER *
 **********/
app.listen(process.env.PORT || 3000, () => {
  console.log('Red 5 standing by on http://localhost:3000/');
});
