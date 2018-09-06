//Requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./models');

//MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

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
    baseUrl: "https://frozen-sea-79124.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "POST", path: "/api/login", description: "User login"},
      {method: "POST", path: "/api/signup", description: "Add new user to database"},
      {method: "GET", path: "/api/user", description: "View all users"}, 
      {method: "GET", path: "/api/heritage", description: "View all SF Heritage bars and restaurants"}, 
      {method: "GET", path: "/api/heritage/:id", description: "View a specific SF Heritage bar or restaurant by id"}, 
      {method: "GET", path: "/api/legacy", description: "View all user submitted SF Legacy bars or restaurants"},
      {method: "GET", path: "/api/legacy/:id", description: "View a specific user submitted Legacy bar or restaurant by id"},
      {method: "POST", path: "/api/legacy", description: "Add a SF Legacy bar or restaurant"}
    ]
  })
});

//On Ajax post request at /api/login
// check to see if user is already in User database 
// if they are, comparedhashed password with entered password
// if match, redirect user to home page
app.post('/api/login' , (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  
  db.User.find({email: email})
    .exec()
    .then( users => {
      if(users.length < 1) {
        return res.status(401).json({
          message: "Email/Password incorrect"
        })
      }
      let passCheck = bcrypt.compare(password, users[0].password, (err, hash) => {
        if (err) {
          return res.status(401).json({message:"Email/Password incorrect"})
        } 
        else {
          if (hash) {
            return res.status(200).json({message: 'Auth successful'})
          } else {
            return res.status(401).json({message:"Email/Password incorrect"})
          }
        } 
      }); 
    }); 
});

// on Ajax post request at /api/signup 
//check to see if user already exists in User database
// if they don't, has their password,
// then create a user and capture and store their name, email, and hashed password
app.post('/api/signup' , (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  db.User.find({email:email})
    .exec()
    .then ( user => {
      if (user.length >=1) {
        return res.status(409).json({
          message: "Email already exits"
        })
      } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              res.status(500).json({error:err})
            } else {
                const user = new db.User({
                  name:req.body.name,
                  email:email,
                  password:hash
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
              }
            })
          }
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({err})
    })
});

// on Ajax get request at /api/user
// reutrn json object of all users
app.get('/api/user', (req, res) => {
  db.User.find( {}, (err, allUsers) => {
    if(err){console.log(err)};
    res.json({data: allUsers});
    })
});    

// on Ajax get request at /api/heritage
// return json object of all heritages
app.get('/api/heritage', (req, res) => {
  db.Heritage.find( {}, (err, allHeritages) => {
    if(err){console.log(err)};
    res.json({data: allHeritages});
    });
  });

// on Ajax get request a /api/heritage/:id
// find heritage in heritage database by id
// return json object of found heritage 
app.get('/api/heritage/:id' , (req, res) => {
  let heritageId = req.params.id;
  db.Heritage.findById( heritageId , (err, foundHeritage) => {
    if(err) { return console.log(err) };
    res.json(foundHeritage);
  });
}); 

// on Ajax get request at /api/legacy
// return json object of all legacies
app.get('/api/legacy', (req, res) => {
  db.Legacy.find( {}, (err, allLegacies) => {
    if(err){console.log(err)};
    res.json({data: allLegacies});
    });
  });

// on Ajax get request at /api/legacy/:id
// find legacy in legacy database by id
// return json object of found legacy 
app.get('/api/legacy/:id' , (req, res) => {
  let legacyId = req.params.id;
  db.Legacy.findById( legacyId , (err, foundLegacy) => {
    if(err) { return console.log(err) };
    res.json(foundLegacy);
  });
});

//on Ajax post request at /api/legacy
// check heritage database to see if heritage with same name already exists
// then check legacy database to see if legacy with same name already exits
// if it passes both above conditions
// then create a legacy and capture and store its name, address, yearOpened, website, and coordinates

app.post('/api/legacy' , (req, res) => {
  db.Heritage.find({name: req.body.name})
  .exec()
  .then( heritage => {
    if(heritage.length >= 1) {
      return res.status(401).json({
        message: "heritage exists"
      })
    }
    db.Legacy.find({name: req.body.name}, (err, legacy) => {
      if(err) { return console.log(err) };
      if (legacy.length >= 1) {
        return res.status(401).json({
          message: "legacy already exists"
        })
      }
      else {
        const legacy = new db.Legacy({
          name: req.body.name,
          address: req.body.address,
          yearOpened: req.body.yearOpened,
          website:req.body.website,
          coordinates: [parseFloat(req.body.lat),parseFloat(req.body.lon)]
        });

        legacy  
          .save()
          .then (result => {
            res.json({legacy
            })
          })
          .catch ( err => {
            console.log(err);
            res.status(500).json({err})
          })
      }    
    });
  });
});

// Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Red 5 standing by on http://localhost:3000/');
});
