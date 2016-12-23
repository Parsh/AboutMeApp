var express = require('express');

var homeData = require('../json/main-tile-data/homeData.json')
var mlData = require('../json/main-tile-data/mlData.json')

var mlCardInfo = require('../json/cards-config-info/mlCardInfo.json')
var webCardInfo = require('../json/cards-config-info/webCardInfo.json')
var aboutCardInfo = require('../json/cards-config-info/aboutCardInfo.json')

var router = express.Router();

/* GET Main Covers Data */
router.get('/homeData.json', function(req, res, next) {
    res.send(homeData);
});

router.get('/mlData.json', function(req, res, next) {
    res.send(mlData);
});



/* GET Cards Config Data */

router.get('/mlCardInfo.json', function(req, res, next) {
    res.send(mlCardInfo);
});

router.get('/webCardInfo.json', function(req, res, next) {
    res.send(webCardInfo);
});

router.get('/aboutCardInfo.json', function(req, res, next) {
    res.send(aboutCardInfo);
});

module.exports = router;
