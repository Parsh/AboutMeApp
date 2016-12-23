var express = require('express');
var router = express.Router();
var homeData = require('../json/homeData.json')

/* GET users listing. */
router.get('/homeData.json', function(req, res, next) {
    res.send(homeData);
});

module.exports = router;
