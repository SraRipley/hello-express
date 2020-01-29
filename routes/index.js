var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const products = [
    {nombre: "Hojalata", precio: 45, existencias: 10},
    {nombre: "León", precio: 54, existencias: 1},
    {nombre: "Totó", precio: 1, existencias: 0},
    {nombre: "Espantapájaros", precio: 10000, existencias: 100},
    {nombre: "Dorothy", precio: 10, existencias: 2},
    {nombre: "Bruja malvada del Oeste", precio: 50, existencias: 5}
  ];
  res.render('index', { title: 'Oz',products });
});

module.exports = router;
