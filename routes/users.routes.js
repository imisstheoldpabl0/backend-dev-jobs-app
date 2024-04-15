const express = require('express');

const router = express.Router();

const usersController = require("../controllers/users.controller.js");
const favoritesController = require("../controllers/favorites.controller.js");


// ADMIN


// [GET] /profile - Compartida con Users
app.get('/profile', function(req, res){
  res.render('./common_views/profile_view.pug');
});

// [GET] /users - Vista del admin con el listado de usuarios
app.get('/users', function(req, res){
  res.render('./admin_views/users_view.pug');
});

// [GET] /dashboard - Vista de admin para crear y visualizar anuncios (en la misma view)
app.get('/dashboard', function(req, res){
  res.render('./admin_views/dashboard_view.pug');
});


// USER 


// [GET] /favorites - Vista del usuario con sus favoritos
app.get('/favorites', function(req, res){
    res.render('./user_views/favorites_view.pug');
  });

  // [GET] /profile - Compartida con Admin
app.get('/profile', function(req, res){
    res.render('./common_views/profile_view.pug');
  });



module.exports = router;