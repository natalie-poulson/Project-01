const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


module.exports = router
    .get('/', ctrl.api.documentation)
    .post('/signup', ctrl.api.signup)
    .post('/login', ctrl.api.login)
    .get('/user', ctrl.api.user)
