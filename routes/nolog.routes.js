const router = express.Router();
const express = require('express');

//Estas rutas las traigo porque acceden a ellas usuarios  nolog

// http://localhost:3000/signup
// [GET] /signup - nolog user
app.get('/signup', function(req, res){
    res.render('./user_views/signup_view.pug');
  });

// [GET] /login - Vista de ingreso de usuario ya registrado
app.get('/login', function(req, res){
    res.render('./common_views/login_view.pug');
  });

module.exports = router;


