const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


module.exports = router
    .get('/', ctrl.legacy.index)
    .get('/:id', ctrl.legacy.show)
    .post('/', ctrl.legacy.create)


