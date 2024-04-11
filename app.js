const express = require('express');
const app = express();
const port = 3000;

// IMPORTAR MIDDLEWARES
const morgan = require('./middlewares/morgan')

// USO MIDDLEWARES
app.use(express.json());
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// CONFIGURACION PUG - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// ENPOINTS WEB
// [GET] / Vista inicio de la app
app.get('/home', function(req, res){
    res.render('home_view.pug');
  });

// [GET] /signup - Vista de registro de usuario
app.get('/signup', function(req, res){
    res.render('signup_view.pug');
  });

// [GET] /login - Vista de ingreso de usuario ya registrado
app.get('/login', function(req, res){
    res.render('login_view.pug');
  });

// [GET] /favorites - Vista del usuario con sus favoritos
app.get('/favorites', function(req, res){
    res.render('favorites_view.pug');
  });

// [GET] /profile - Vista del usuario o el admin con sus datos de perfil
app.get('/profile', function(req, res){
    res.render('_________.pug');
  });

// [GET] /users - Vista del admin con el listado de usuarios
app.get('/users', function(req, res){
    res.render('users_view.pug');
  });

// [GET] /dashboard - Vista de admin para crear y visualizar anuncios
app.get('/dashboard', function(req, res){
    res.render('dashboard_view.pug');
  });


// ENDPOINTS API

// LISTENING PORT - http://localhost:3000
const server = app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });
  
  module.exports = server;



/*
[GET] / Vista de inicio de la app
[GET] /signup Vista de registro de usuario
[GET] /login Vista de ingreso de usuario ya registrado
[GET] /favorites Vista del usuario con sus favoritos
[GET] /profile Vista del usuario o el administrador con sus datos de perfil
[GET] /users Vista del administrador con el listado de usuario registrados (admin)
[GET] /dashboard Vista del administrador para crear y visualizar sus anuncios (admin)
*/

