const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const auth = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Page
 *   description: Page CRUD ve showcase ilişkisi
 */

/**
 * @swagger
 * /Pages:
 *   get:
 *     summary: Sayfaları listele (pagination)
 *     tags: [Page]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Sayfa numarası
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Sayfa başı kayıt
 *     responses:
 *       200:
 *         description: Page listesi
 *   post:
 *     summary: Yeni page oluştur
 *     tags: [Page]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: object
 *               slug:
 *                 type: object
 *               description:
 *                 type: object
 *               content:
 *                 type: object
 *               specialField1:
 *                 type: object
 *               specialField2:
 *                 type: object
 *               specialField3:
 *                 type: object
 *               specialField4:
 *                 type: object
 *               specialField5:
 *                 type: object
 *               meta:
 *                 type: object
 *     responses:
 *       201:
 *         description: Page oluşturuldu
 *
 * /Pages/{id}:
 *   get:
 *     summary: Page detay
 *     tags: [Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Page detay
 *   put:
 *     summary: Page güncelle
 *     tags: [Page]
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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: object
 *               slug:
 *                 type: object
 *               description:
 *                 type: object
 *               content:
 *                 type: object
 *               specialField1:
 *                 type: object
 *               specialField2:
 *                 type: object
 *               specialField3:
 *                 type: object
 *               specialField4:
 *                 type: object
 *               specialField5:
 *                 type: object
 *               meta:
 *                 type: object
 *     responses:
 *       200:
 *         description: Page güncellendi
 * /Pages/Slug/{slug}:
 *   get:
 *     summary: Slug ile page getir
 *     tags: [Page]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Slug
 *       - in: query
 *         name: lang
 *         schema:
 *           type: string
 *         description: Dil (tr/en)
 *     responses:
 *       200:
 *         description: Page detay
 *       404:
 *         description: Page not found
 */
router.get('/pages', pageController.getPages);
router.get('/pages/:id', pageController.getPage);
router.post('/pages', auth, pageController.createPage);
router.put('/pages/:id', auth, pageController.updatePage);
router.get('/pages/slug/:slug', pageController.getPageBySlug);

module.exports = router;
