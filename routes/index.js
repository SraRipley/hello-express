var express = require('express');
var router = express.Router();
var products = require ("../models/products.js");
var users = require ("../models/users.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.session.username;
  res.render('index', { title: 'Oz', username,products });
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

var cesta = []; //provisional

router.post("/comprar", function(req, res, next){
  const ref = req.body.ref;
  const product = products.find(function(p) {
    return p.ref == ref;
  });
  //Añadimos producto a la cesta
  cesta.push(product);
  //Redirigimos a página de productos
  res.redirect("/");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});
/**
 * Procesamiento del formulario de login. Obtiene los datos del formulario en la petición(req) y
 * comprueba si hay algún usuario con ese nombre y contraseña.
 * Si coincide, genera una cookie y dirige a la página ppal.
 * Si no coincide, vuelve a cargar la página de login para mostrar el error.
 */
router.post("/login", function(req, res, next){
  //const username = req.body.username;
  //const password = req.body.password;
  const {username, password} = req.body;
  const user = users.find(function(u){
    //if(u.username == username && u.password == password)¨{
    //  return true;
    //}else{
    //  return false;
    //}
    return (u.username == username && u.password == password);
  });
  if (user) {
    //TODO:generar cookie
    req.session.username = username;
    res.redirect("/");
  }else{
    //TODO: inyectar mensaje de error en la plantilla   
    res.render("login");
  }
});

module.exports=router;
