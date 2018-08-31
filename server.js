const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const jwt = require('jsonwebtoken');


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
// routes for login and signup
// app.use('/user', userRoutes);

// Database
const db = require('./models');


//Routes
app.use(express.static('public'));

//HTML Endpoints
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/map', (req, res) => {
  res.sendFile(__dirname + '/views/map.html');
})

//JSON API Endpoints
app.get('/api', (req, res) => {

  res.json({
    message: "Welcome to my personal API! Here's what you need to know!",
    documentationUrl: "https://github.com/natalie-poulson/personal-api", 
    baseUrl: "https://hidden-falls-48101.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/legacy", description: "View all SF Legacy bars and restaurants"}, 
      {method: "GET", path: "/api/legacy/:id", description: "View a specific SF Legacy bar or restaurant by id"}, 
      {method: "POST", path: "/api/legacy", description: "Create a new SF Legacy bar or restaurant"},
    ]
  })
});

//get all legacys request
app.get('/api/legacy', (req, res) => {
  //find all legacys in db
  db.Legacy.find( {}, (err, allLegacies) => {
    //if err, send err
    if(err){console.log(err)};
    //else, respond with a json object of all the legacies
    // console.log(allLegacies);
    res.json({data: allLegacies});
    });
  });

  //get a specific legacy by id
  app.get('/api/legacy/:id' , (req, res) => {
    //get id from url parameters
    let legacyId = req.params.id;
  //find legacy in db by id
    db.Legacy.findById( legacyId , (err, foundLegacy) => {
      if(err) { return console.log(err) };
      res.json(foundLegacy);
    });
  }); 

//create a new legacy
app.post('/api/legacy' , (req,res) => {
  //grab what the user entered in the body
  console.log(req.body);
  let newLegacy = req.body;
  //take the req body and create a new legacy in the db
  db.Legacy.create( newLegacy, (err,savedLegacy) => {
    if(err) {return console.log(err)};
    res.json(savedLegacy);
  });
});

app.post('/', (req, res) => {
  console.log(req.name);
  let newUser = req.name;
  db.User.create(newUser, (err, savedUser) => {
    if(err) {res.json('Nooooooo');
    } else {
      res.json(savedUser)
    }
  })
})


app.post('/verify', verifyToken, (req, res) => {
  let verified= jwt.verify(req.token, 'waffles')
  console.log("verified: ", verified)
  res.json(verified)
})

// protected route - a route only a user with a jwt token in their header can access.
// app.post('/api/posts', verifyToken, (req, res) => {
//   console.log(req.token)
//   jwt.verify(req.token, 'waffles', (err, authData) => {
//     if(err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post created',
//         authData
//       });
//     }

//   });
// });

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  console.log("in verify...");
  // Get auth header value
  // when we send our token, we want to send it in our header
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader)
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();

  } else {
    // Forbidden
    res.sendStatus(403);
  }
}


// Server
// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Red 5 standing by on http://localhost:3000/');
});



