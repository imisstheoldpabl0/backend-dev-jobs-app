const express = require('express');

const router = express.Router();

const usersController = require("../controllers/users.controller.js");
const favoritesController = require("../controllers/favorites.controller.js");


// [GET] /signup - También la tiene el admin
app.get('/signup', function(req, res){
    res.render('./user_views/signup_view.pug');
  });

// [GET] /login - Vista de ingreso de usuario ya registrado
app.get('/login', function(req, res){
    res.render('./common_views/login_view.pug');
  });

// [GET] /favorites - Vista del usuario con sus favoritos
app.get('/favorites', function(req, res){
    res.render('./user_views/favorites_view.pug');
  });

  // [GET] /profile - Compartida con Admin
app.get('/profile', function(req, res){
    res.render('./common_views/profile_view.pug');
  });



module.exports = router;