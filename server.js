const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const userRoutes = require('./routes/user');
// const jwt = require('jsonwebtoken');


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

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})

//JSON API Endpoints
app.get('/api', (req, res) => {
  res.json({
    documentationUrl: "https://github.com/aduncan12/Project-01", 
    baseUrl: "https://hidden-falls-48101.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/heritage", description: "View all SF Heritage Legacy bars and restaurants"}, 
      {method: "GET", path: "/api/heritage/:id", description: "View a specific SF Heritage Legacy bar or restaurant by id"}, 
      {method: "POST", path: "/api/legacy", description: "Add a SF Legacy bar or restaurant"},
      {method: "GET", path: "/api/legacy", description: "View all user submitted SF Legacy bar or restaurant"},
      {method: "GET", path: "/api/legacy/:id", description: "View a specific user submitted Legacy bar or restaurant by id"}, 
      {method: "POST", path: "/api/signup", description: "Add new user to database"},
      {method: "POST", path: "/api/login", description: "User login"},
      {method: "GET", path: "/api/user", description: "View all users"}, 
    ]
  })
});

// Sign up page. Checks to make sure email doesn't already exist
app.post('/api/signup' , (req, res) => {
  db.User.find({email:req.body.email})
    .exec()
    .then ( user => {
      if (user.length >=1) {
        return res.status(409).json({
          message: "email already exits"
        })
      } 
        else {
          // bcrypt.hash(req.body.password, 10, (err, hash) => {
          //   if (err) {
          //     res.status(500).json({error:err})
          //   } else {
                const user = new db.User({
                  name:req.body.name,
                  email:req.body.email,
                  password:req.body.password
                });
                user  
                  .save()
                  .then (result => {
                  res.json({message:'User created',
                          user: result
                          })
                  })
                  .catch ( err => {
                    console.log(err);
                    res.status(500).json({err})
                  })
              // }
            // })
          }
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({err})
    })
});

//Get all users request
app.get('/api/user', (req, res) => {
  //find all heritages in db
  db.User.find( {}, (err, allUsers) => {
    //if err, send err
    if(err){console.log(err)};
    //else, respond with a json object of all the heritages
    res.json({data: allUsers});
    })
});    

//login page 
app.post('/api/login' , (req, res) => {
  console.log("LOGIN CALLED");
  // find the user in our user db
  db.User.find({email: req.body.email})
    .exec()
    // if we have found a user
    .then( users => {
      // if there is not email in our db
      if(users.length < 1) {
        return res.status(401).json({
          message: "Email/Password incorrect"
        })
      }
      // we have an email in our db that matches what they gave us
      // now we have to compare their hashed password to what we have in our db
      db.User.findOne({email: req.body.email, password: req.body.password}, (err, match) => {
        console.log(match)
        // If the compare function breaks, let them know
        if(err){return res.status(500).json({err})}

        // If match is true (their password matches our db password)
        if(match){
          return res.status(200).json(
            {
              message: 'Auth successful'
            }
          )
        // the password provided does not match the password on file.
        } else {
          res.status(401).json({message: "Email/Password incorrect"})
        }
      })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({err})
    })
})


// app.post('/signup', (req, res) => {
//   console.log('helloooo?');
//   db.User.find({email: req.body.email})
//     .exec()
//     .then( user => {
//       if (user.length >= 1) {
//         return res.status(409).json({
//           message: "email already exists"
//         })
//         } else {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           if(err){ 
//             console.log("hashing error:", err);
//             res.status(200).json({error: err})
//           } else {
//             db.User.create({
//               name: req.body.name,
//               email: req.body.email,
//               password: hash
//             }, {password: 0}, (err, result) => {
//             result = result[0]
//             jwt.sign(
//                 {result},
//                 "secret",
//                 (err, signedJwt) => {
//                 res.status(200).json({
//                   message: 'User Created',
//                   result,
//                   signedJwt
//                 })
//               });
//             })
//           }
//         })
//       }
//     })
//     .catch( err => {
//       console.log(err);
//       res.status(500).json({err})
//     })
// });

// app.post('/verify', verifyToken, (req, res) => {
//   let verified= jwt.verify(req.token, 'secret')
//   console.log("verified: ", verified)
//   res.json(verified)
// })

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
// function verifyToken(req, res, next) {
//   console.log("in verify...");
//   // Get auth header value
//   // when we send our token, we want to send it in our header
//   const bearerHeader = req.headers['authorization'];
//   console.log(bearerHeader)
//   // Check if bearer is undefined
//   if(typeof bearerHeader !== 'undefined'){
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();

//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }



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
  let newLegacy = {
      name: req.body.name,
      address: req.body.address,
      yearOpened: req.body.yearOpened,
      coordinates: [parseFloat(req.body.lat),parseFloat(req.body.lon)]
  }
  db.Legacy.create( newLegacy, (err,savedLegacy) => {
    if(err) {return console.log(err)};
    res.json(savedLegacy);
  });
});

//Get all legacies request
app.get('/api/legacy', (req, res) => {
  //find all heritages in db
  db.Legacy.find( {}, (err, allLegacies) => {
    //if err, send err
    if(err){console.log(err)};
    //else, respond with a json object of all the heritages
    res.json({data: allLegacies});
    });
  });

 //Get a specific legacy by id
 app.get('/api/legacy/:id' , (req, res) => {
  //get id from url parameters
  let legacyId = req.params.id;
//find heritage in db by id
  db.Legacy.findById( legacyId , (err, foundLegacy) => {
    if(err) { return console.log(err) };
    res.json(foundLegacy);
  });
}); 

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

// // Verify Tokenj 
// function verifyToken(req, res, next) {
//   console.log("in verify...");
//   // Get auth header value
//   // when we send our token, we want to send it in our header
//   const bearerHeader = req.headers['authorization'];
//   console.log(bearerHeader)
//   // Check if bearer is undefined
//   if(typeof bearerHeader !== 'undefined'){
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();

//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }


// Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Red 5 standing by on http://localhost:3000/');
});
