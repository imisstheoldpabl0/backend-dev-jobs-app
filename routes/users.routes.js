const express = require('express');
const router = express.Router();
const app = express();


const usersController = require('../controllers/users.controller');


// http://localhost:3000/signup
// [GET] /signup - nolog user
app.get('/signup', function(req, res){
  res.render('./user_views/signup_view.pug');
});

// [GET] /login - Vista de ingreso de usuario ya registrado
app.get('/login', function(req, res){
  res.render('./common_views/login_view.pug');
});

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

// [GET] /favorites - Vista del usuario con sus favoritos
app.get('/favorites', function(req, res){
    res.render('./user_views/favorites_view.pug');
  });

  // [GET] /profile - Compartida con Admin
app.get('/profile', function(req, res){
    res.render('./common_views/profile_view.pug');
  });

router.post("/", usersController.createUser);
router.put("/", usersController.getAllUsers);
router.delete("/", usersController.deleteUser);

module.exports = router;