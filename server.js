const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// const userRoutes = require('./routes/user');
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
      {method: "GET", path: "/api/heritage", description: "View all SF Heritage Legacy bars and restaurants"}, 
      {method: "GET", path: "/api/heritage/:id", description: "View a specific SF Heritage Legacy bar or restaurant by id"}, 
      {method: "POST", path: "/api/legacy", description: "Show a user submitted SF Legacy bar or restaurant"},
      {method: "POST", path: "/api/user", description: "Add new user to database"}
    ]
  })
});


app.post('/signup', (req, res) => {
  console.log('helloooo?');
  db.User.find({email: req.body.email})
    .exec()
    .then( user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "email already exists"
        })
        } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err){ 
            console.log("hashing error:", err);
            res.status(200).json({error: err})
          } else {
            db.User.create({
              name: req.body.name,
              email: req.body.email,
              password: hash
            }, {password: 0}, (err, result) => {
            result = result[0]
            jwt.sign(
                {result},
                "secret",
                (err, signedJwt) => {
                res.status(200).json({
                  message: 'User Created',
                  result,
                  signedJwt
                })
              });
            })
          }
        })
      }
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({err})
    })
});

app.post('/verify', verifyToken, (req, res) => {
  let verified= jwt.verify(req.token, 'secret')
  console.log("verified: ", verified)
  res.json(verified)
})

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



//Get all heritages request
app.get('/api/heritage', (req, res) => {
  //find all heritages in db
  db.Heritage.find( {}, (err, allHeritages) => {
    //if err, send err
    if(err){console.log(err)};
    //else, respond with a json object of all the heritages
    res.json({data: allHeritages});
    });
  });

  //Get a specific heritage by id
  app.get('/api/heritage/:id' , (req, res) => {
    //get id from url parameters
    let heritageId = req.params.id;
  //find heritage in db by id
    db.Heritage.findById( heritageId , (err, foundHeritage) => {
      if(err) { return console.log(err) };
      res.json(foundHeritage);
    });
  }); 

//Create a new legacy
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

// Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Red 5 standing by on http://localhost:3000/');
});



