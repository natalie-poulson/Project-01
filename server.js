const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');

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

app.get('/api/user', (req, res) => {
  db.User.find( {}, (err, allUsers) => {
    if(err){console.log(err)};
    res.json({data: allUsers});
    })
});    

app.post('/api/login' , (req, res) => {
  console.log("LOGIN CALLED");
  db.User.find({email: req.body.email})
    .exec()
    .then( users => {
      if(users.length < 1) {
        return res.status(401).json({
          message: "Email/Password incorrect"
        })
      }
      db.User.findOne({email: req.body.email, password: req.body.password}, (err, match) => {
        console.log(match)
        if(err){return res.status(500).json({err})}
        if(match){
          return res.status(200).json(
            {
              message: 'Auth successful'
            }
          )
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

app.get('/api/heritage', (req, res) => {
  db.Heritage.find( {}, (err, allHeritages) => {
    if(err){console.log(err)};
    res.json({data: allHeritages});
    });
  });

  app.get('/api/heritage/:id' , (req, res) => {
    let heritageId = req.params.id;
    db.Heritage.findById( heritageId , (err, foundHeritage) => {
      if(err) { return console.log(err) };
      res.json(foundHeritage);
    });
  }); 

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
        coordinates: [parseFloat(req.body.lat),parseFloat(req.body.lon)]
        });

        legacy  
          .save()
          .then (result => {
          res.json({message:'legacy created',
              legacy: result
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

app.get('/api/legacy', (req, res) => {
  db.Legacy.find( {}, (err, allLegacies) => {
    if(err){console.log(err)};
    res.json({data: allLegacies});
    });
  });

app.get('/api/legacy/:id' , (req, res) => {
  let legacyId = req.params.id;
  db.Legacy.findById( legacyId , (err, foundLegacy) => {
    if(err) { return console.log(err) };
    res.json(foundLegacy);
  });
}); 

// Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Red 5 standing by on http://localhost:3000/');
});
