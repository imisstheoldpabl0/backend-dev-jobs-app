const express = require('express');
const router = express.Router();
const apiFavoriteController= require ("../controllers/apifavorites.controller");

router.post("/:id",apiFavoriteController.createFavorite);

module.exports = router;