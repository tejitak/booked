var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // TODO: set uesr info
    res.render('index', { 
        loginUser: req.user
    });
});

module.exports = router;
