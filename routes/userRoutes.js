const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userUpload = require('../middleware/userUpload');

// POST endpoint to create a new user with file upload
router.post('/', userUpload.single('file'), userController.createUser);

module.exports = router;