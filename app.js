/**
 * @fileoverview This file is the heart of the project and includes the web server configuration and endpoints.
 * @exports app
 * @namespace app
 */

require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// RUTAS
const adsRoutes= require("./routes/ads.routes")
const usersRoutes = require("./routes/users.routes");
const apiSearchRoutes = require("./routes/apisearch.routes");
const apiLoginRoutes = require("./routes/login.routes");
const apiFavoritesRoutes= require("./routes/favorites.routes")

// IMPORTAR MIDDLEWARES
const morgan = require('./middlewares/morgan');


// USO MIDDLEWARES
app.use(express.json());
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use(express.static('public')); // nueva linea (debajo uso middlewars)


// CONFIGURACION PUG - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// ENDPOINTS WEB

/**
 * Renders the home view.
 * @name GET /
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/", (req, res) => {
  res.render('home_view');
});

/**
 * Renders the signup view.
 * @name GET /signup
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/signup', function(req, res){
  res.render('signup_view');
});

/**
 * Renders the login view.
 * @name GET /login
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/login', function(req, res){
  res.render('login_view');
});

/**
 * Renders the logout view.
 * @name GET /logout
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/logout', function(req, res){
  res.render('logout_view');
});

/**
 * Renders the profile view.
 * @name GET /profile
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/profile', function(req, res){
  res.render('profile_view');
});

/**
 * Renders the dashboard view.
 * @name GET /dashboard
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/dashboard', function(req, res){
  res.render('dashboard_view');
});

/**
 * Renders the favorites view.
 * @name GET /favorites
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/favorites', function(req, res){
  res.render('favorites_view');
});

/**
 * Renders the profile view.
 * @name GET /profile
 * @function
 * @memberof app
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */

// RUTAS GET para las vistas
// http://localhost:3000/
app.get("/", (req, res) => {
  res.render('home_view');
});
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


// DOCUMENTATION JS-DOCS

// LISTENING PORT - http://localhost:3000
/**
 * Starts the server and listens on the specified port.
 * @name app.listen
 * @function
 * @memberof app
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The callback function to be executed when the server starts listening.
 */
const server = app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});

module.exports = server;