const db = require('../models')

module.exports = { 
    index: (req, res) => {
        db.Legacy.find( {}, (err, allLegacies) => {
            if (err) {res.status(500).json({err})}
            res.json({data: allLegacies});
        });
    },

    show: (req, res) => {
        db.Legacy.findById( req.params.id, (err, foundLegacy) => {
            if (err) {res.status(500).json({err})}
            res.json(foundLegacy);
        });
    },

    create: (req, res) => {
        db.Heritage.find({name: req.body.name})
        .exec()
        .then( heritage => {
            if(heritage.length >= 1) {
                return res.status(401).json({message: "Already exists in Heritage Database"})
            }
            db.Legacy.find({name: req.body.name}, (err, legacy) => {
                if (err) { console.log (err); return res.status(500).json({err})} 
                if (legacy.length >= 1) {
                    return res.status(401).json({message: "Already exists in the Legacy Database"})
                } else {
                    const legacy = new db.Legacy({
                    name: req.body.name,
                    address: req.body.address,
                    yearOpened: req.body.yearOpened,
                    website:req.body.website,
                    coordinates: [parseFloat(req.body.lat),parseFloat(req.body.lon)]
                    });

                    legacy  
                        .save()
                        .then (result => {res.json({message:'legacy created', legacy: result}) })
                        .catch ( err => {res.status(500).json({err})})
                }    
            });
        });
    }
}