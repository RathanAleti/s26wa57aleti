var express = require('express');
var router = express.Router();
var vOne = 10;
var vTwo = 15;

/* GET users listing. */
router.get('/', function(req, res, next) {
  vTwo = vTwo - vOne
  res.send(`Values are: ${vOne} and ${vTwo}`);
});

module.exports = router;
