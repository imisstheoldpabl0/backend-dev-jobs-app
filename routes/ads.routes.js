const express = require('express');
const router = express.Router();
const app = express();
const adsController = require('../controllers/ads.controller');



router.post("/", adsController.createAds);
router.put("/", adsController.updateAds);
router.delete("/", adsController.deleteAds);

module.exports = router;