const express = require('express');
const router = express.Router();
const adsController = require('../controllers/ads.controller');

//router.get("/", adsController.readAllAds);
router.post("/", adsController.createAds);
router.put("/:id", adsController.updateAds);
router.delete("/", adsController.deleteAds);

module.exports = router;