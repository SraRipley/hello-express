var express = require('express');
var router = express.Router();
var products = require ("../models/products.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oz',products });
});

router.get('/products/:ref', function(req, res, next) {
  var ref = req.params.ref;
  const product = products.find(function(p) {
    return p.ref == ref;
  });
  if (product){
  res.render("producto",{product});
  }else{
    res.redirect("/error");
  }
});

module.exports=router;
