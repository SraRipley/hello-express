var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const products = [
    {nombre: "Hojalata", precio: 45, existencias: 10, imagen: "hojalata.jpg"},
    {nombre: "León", precio: 54, existencias: 1, imagen:"leon.jpg"},
    {nombre: "Totó", precio: 1, existencias: 0, imagen:"toto.jpg"},
    {nombre: "Espantapájaros", precio: 10000, existencias: 100, imagen:"espanta1.jpg"},
    {nombre: "Dorothy", precio: 10, existencias: 2, imagen:"dorothy.jpg"},
    {nombre: "Bruja malvada del Oeste", precio: 50, existencias: 5, imagen:"oeste1.jpg"}
  ];
  res.render('index', { title: 'Oz',products });
});

module.exports = router;
