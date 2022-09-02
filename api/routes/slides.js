// @ts-nocheck
var express = require('express');
var router = express.Router();

var slides = require('../models/slides');

/* GET home page. */
router.get('/', function(req, res, next) {
  const ms = req.query.ms | 0;
  setTimeout(() => {
    res.send(slides);
  }, ms);
});

module.exports = router;
