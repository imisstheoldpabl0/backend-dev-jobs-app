require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// Rutas
const adsRoutes= require("./routes/ads.routes")
const usersRoutes = require("./routes/users.routes");
const apiSearchRoutes = require("./routes/apisearch.routes");

const apiLoginRoutes = require("./routes/login.routes");

const apiFavoritesRoutes= require("./routes/favorites.routes")



// IMPORTAR MIDDLEWARES
//const morgan = require('./middlewares/morgan')

// USO MIDDLEWARES
app.use(express.json());
//app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use(express.static('public')); // nueva linea (debajo uso middlewars)

// CONFIGURACION PUG - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// ENDPOINTS WEB


// http://localhost:3000/
app.get("/", (req, res) => {
  res.render('home_view');
});

// http://localhost:3000/signup
// [GET] /signup - nolog user
app.get('/signup', function(req, res){
  res.render('signup_view');
});

// [GET] /login - Vista de ingreso de usuario ya registrado
app.get('/login', function(req, res){
  res.render('login_view');
});

// [GET] /logout - Cierre de sesión del usuario logeado
app.get('/logout', function(req, res){
  res.render('logout_view');
});

// [GET] /profile - Compartida con Users
app.get('/profile', function(req, res){
  res.render('profile_view');
});



// [GET] /dashboard - Vista de admin para crear y visualizar anuncios (en la misma view)
app.get('/dashboard', function(req, res){
  res.render('dashboard_view');
});

// [GET] /favorites - Vista del usuario con sus favoritos
app.get('/favorites', function(req, res){
    res.render('favorites_view');
  });

  // [GET] /profile - Compartida con Admin
app.get('/profile', function(req, res){
    res.render('profile_view');
  });

// ENDPOINTS API
// [GET] /users - Vista del admin con el listado de usuarios
app.use('/users', usersRoutes);
app.use('/api/ads',adsRoutes);
app.use('/api/search', apiSearchRoutes);

app.use('/api/login', apiLoginRoutes); 

app.use('/api/favorites', apiFavoritesRoutes);




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

