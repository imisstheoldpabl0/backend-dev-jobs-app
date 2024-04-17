const express = require('express');
const router = express.Router();
const app = express();


const usersController = require('../controllers/users.controller');

router.post("/", usersController.createUser);
router.put("/", usersController.getAllUsers);
//router.delete("/", usersController.deleteUser);

module.exports = router;