/**
 * @swagger
 * tags:
 *   name: Showcase
 *   description: Showcase CRUD, sıralama ve dosya yükleme servisleri (Company ile ilişkili)
 */

/**
 * @swagger
 * /Showcases:
 *   post:
 *     summary: Showcase ekle
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
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
 *               order:
 *                 type: integer
 *               companyId:
 *                 type: integer
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Showcase başarıyla eklendi
 *   get:
 *     summary: Showcaseleri listele (companyId ile)
 *     tags: [Showcase]
 *     parameters:
 *       - in: query
 *         name: companyId
 *         schema:
 *           type: integer
 *         description: "Company ID"
 *     responses:
 *       200:
 *         description: Showcase listesi
 *
 * /Showcases/{id}:
 *   get:
 *     summary: Showcase detay
 *     tags: [Showcase]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Showcase detay
 *   put:
 *     summary: Showcase güncelle
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
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
 *               order:
 *                 type: integer
 *               companyId:
 *                 type: integer
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Showcase güncellendi
 *   delete:
 *     summary: Showcase sil
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Showcase silindi
 *
 * /Showcases/Order:
 *   post:
 *     summary: Showcase sıralama güncelle
 *     tags: [Showcase]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderList:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     order:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Sıralama güncellendi
 */

const express = require('express');
const router = express.Router();
const showcaseController = require('../controllers/showcaseController');
const showcaseUpload = require('../middleware/showcaseUpload');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, showcaseUpload.single('file'), showcaseController.createShowcase);
router.get('/:id', showcaseController.getShowcase);
router.get('/', showcaseController.getAllShowcases);
router.put('/:id', auth, showcaseUpload.single('file'), showcaseController.updateShowcase);
router.delete('/:id', auth, showcaseController.deleteShowcase);
router.post('/order', auth, showcaseController.updateShowcaseOrder);

module.exports = router;
