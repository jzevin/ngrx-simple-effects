var express = require('express');
var router = express.Router();

var slides = require('../models/slides');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(slides);
});

module.exports = router;
