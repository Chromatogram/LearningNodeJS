var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('searchChemical', { title : 'Teszt oldal'});
});

module.exports = router;
