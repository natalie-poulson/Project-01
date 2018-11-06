const db = require('../models')

module.exports = { 
    index: (req, res) => {
        db.Heritage.find( {}, (err, allHeritages) => {
            if (err) {res.status(500).json({err})}
            res.json({data: allHeritages});
        });
    },

    show: (req, res) => {
        db.Heritage.findById( req.params.id , (err, foundHeritage) => {
            if (err) {res.status(500).json({err})}
            res.json(foundHeritage);
        });
    }

}