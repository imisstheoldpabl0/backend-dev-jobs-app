const express = require('express');
const app = express();
const port = 3000;

// Rutas
const usersRoutes = require("./routes/user.routes")
const adminRoutes = require("./routes/admin.routes")
const nologgedRoutes = require("./routes/nologged.routes")


// IMPORTAR MIDDLEWARES
const morgan = require('./middlewares/morgan')

// USO MIDDLEWARES
app.use(express.json());
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use(express.static('public')); // nueva linea (debajo uso middlewars)

app.use(express.static('public'));

// CONFIGURACION PUG - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// ENDPOINTS WEB


// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Welcome to backend!");
});

// ENDPOINTS API
app.use('/api/users', usersRoutes);
app.use('/api/nologged',nologgedRoutes);
app.use('/api/admin',adminRoutes);
//app.use("./api/ads",adsRoutes);



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

