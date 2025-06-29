/**
 * @swagger
 * tags:
 *   name: Company
 *   description: Company bilgisi (tek kayıt), dosya yükleme ve altındaki Showcases ile birlikte gelir
 */

/**
 * @swagger
 * /Company:
 *   get:
 *     summary: Company bilgisini getir (Showcase'lerle birlikte)
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Company ve Showcases
 *   put:
 *     summary: Company bilgisini güncelle (file destekli)
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: "Çok dilli başlık (JSON string)"
 *               description:
 *                 type: string
 *                 description: "Çok dilli açıklama (JSON string)"
 *               content:
 *                 type: string
 *                 description: "Çok dilli içerik (JSON string)"
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Company güncellendi
 */

const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const companyUpload = require('../middleware/companyUpload');

router.get('/', companyController.getCompany);
router.put('/', companyUpload.single('file'), companyController.updateCompany);

module.exports = router;
