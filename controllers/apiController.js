const db = require('../models')
const bcrypt = require('bcrypt');

module.exports = { 

    documentation: (req, res) => {
        res.json({
            message:"Welcome to the SF Legacy Eats API. Here's what you need to know",
            documentationUrl: "https://github.com/natalie-poulson/SF-Legacy-Eats", 
            baseUrl: "https://hidden-falls-48101.herokuapp.com/", 
            endpoints: [
                {method: "GET", path: "/api", description: "Describes all available endpoints"},
                {method: "GET", path: "/api/heritage", description: "View all SF Heritage bars and restaurants"}, 
                {method: "GET", path: "/api/heritage/:id", description: "View a specific SF Heritage bar or restaurant by id"}, 
                {method: "POST", path: "/api/legacy", description: "Add a SF Legacy bar or restaurant"},
                {method: "GET", path: "/api/legacy", description: "View all user submitted SF Legacy bars and restaurants"},
                {method: "GET", path: "/api/legacy/:id", description: "View a specific user submitted Legacy bar or restaurant by id"}, 
                {method: "POST", path: "/api/signup", description: "Add new user to database"},
                {method: "POST", path: "/api/login", description: "User login"},
            ]
        });
    },

    signup: (req, res) => {
        db.User.find({email:req.body.email})
            .exec()
            .then (user => {
                if (user.length >=1) {
                    return res.status(409).json({message: "Email already exits"})
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {res.status(500).json({err})
                        } else {
                            const user = new db.User({
                                name:req.body.name,
                                email:req.body.email,
                                password:hash
                            });
                            user  
                                .save()
                                .then (result => {res.json({message:'User created', user:result})})
                                .catch ( err => {res.status(500).json({err})})
                        };
                    });
                };
            })
            .catch( err => {res.status(500).json({err})})
        },

        login: (req, res) => {
            db.User.find({email: req.body.email})
                .exec()
                .then( users => {
                    if (users.length < 1) {
                        return res.status(401).json({message: "Email/Password incorrect"})
                    } 
                    bcrypt.compare(req.body.password, users[0].password, (err, match) => {
                        if (err) { console.log (err); return res.status(500).json({err})} 
                        if (match) {return res.status(200).json({message: 'Auth successful'})
                        } else {
                            res.status(401).json({message:"Email/Password incorrect"});
                        }
                    });
                })
                .catch( err => {res.status(500).json({err})})
        }, 

        user: (req, res) => {
            db.User.find( {}, (err, allUsers) => {
                if (err) {res.status(500).json({err})
                } else {res.json({data: allUsers})}
            });
        } 

}