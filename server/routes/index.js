var express = require('express');
var router = express.Router();
var login = require('../controllers/login')

/* GET home page. */
router.post('/login',login.loginWithGoogle);

module.exports = router;
