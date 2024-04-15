const router = express.Router();
const express = require('express');
// Rutas de productos
//const userController = require("../controllers/users.controller");
//const favoriteController = require("../controllers/favorites.controller");
const adsController = require('../controllers/admin.controller');



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

router.post("/", adsController.createAds);
router.put("/", adsController.updateAds);
router.delete("/", adsController.deleteAds);


  //GET vista de los anuncios creados- sedib ua en dashboard también
module.exports = router;

