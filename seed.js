const db = require('./models');

let userList = [
    {
    name: "Natalie",
    email: "natalieplsn@gmail.com",
    password: "cowboys"
    }
]

let legacyList = [
    {
        name: "Tonga Room & Hurricane Bar",
        address: "950 Mason St, San Francisco, CA 94108",
        yearOpened: 1945,
        coordinates: [37.7921,-122.4100],
        // user: {
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref: 'User'
        // }
    }
];

let heritageList = [
    {
    name: "<a href='https://tadichgrillsf.com/' target='_blank'>Tadich Grill</a>",
    address: "240 California St, San Francisco, CA 94111",
    yearOpened: "1849",
    coordinates: [37.7934,-122.3995]
    },
    {
    name: "<a href='http://toscacafesf.com/' target='_blank'>Tosca Cafe</a>",
    address: "242 Columbus Ave, San Francisco, CA 94133",
    yearOpened: "1919",
    coordinates: [37.7976,-122.4059]
    },
    {
    name: "<a href='http://www.samworestaurant.com/' target='_blank'>Sam Wo</a>",
    address: "2713 Clay St, San Francisco, CA 94108",
    yearOpened: "1912",
    coordinates: [37.7942, -122.4051]
    },
    {
    name: "<a href='https://cliffhouse.com/' target='_blank'>Cliff House</a>",
    address: "1090 Point Lobos Ave, San Francisco, CA 94121",
    yearOpened: "1858",
    coordinates: [37.7785, -122.5140]
    }
];

db.Heritage.remove( {} , (req,res) => {
    db.Heritage.create(heritageList, (err, newBusiness) => {
        if(err){
            console.log(err);
        }
        console.log("Created a new heritage bar or restaraunt", newBusiness);
        
        db.Legacy.remove( {} , (req,res) => {
            db.Legacy.create(legacyList, (err, newLegacyBusiness) => {
                if(err){
                    console.log(err);
                }
                console.log("Created a new legacy bar or restaraunt", newLegacyBusiness);
        
                db.User.remove( {} , (req,res) => {
                    db.User.create(userList, (err, newUser) => {
                        if(err){
                            console.log(err);
                        }
                        console.log("Created a new user", newUser);
                        process.exit();
                    });
                });
            });
        }); 
    });
});


