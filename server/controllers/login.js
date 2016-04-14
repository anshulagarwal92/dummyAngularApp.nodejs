var User = require('../models/user')
    , async = require("async")
    , fs = require('fs')
    , path = require('path')
    , mongoose = require('mongoose')
    , config = require('../config/config');

/**
 * ProtoType methods.
 */
LoginController = {
    loginWithGoogle : function(req, res, next) {

    }
};

module.exports = LoginController;
