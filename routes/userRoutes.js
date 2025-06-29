const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userUpload = require('../middleware/userUpload');

router.post('/', userUpload.single('file'), userController.createUser);

module.exports = router;