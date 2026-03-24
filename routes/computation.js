var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var x = req.query.x ? parseFloat(req.query.x) : Math.random();
  var result = Math.cos(x);
  res.send(`Math.cos applied to ${x} is ${result}`);
});

module.exports = router;