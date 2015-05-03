var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('searchChemical2', { title : 'Teszt oldal2'});
});

module.exports = router;
