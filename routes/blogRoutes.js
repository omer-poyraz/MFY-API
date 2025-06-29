/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog CRUD, sıralama ve dosya yükleme servisleri
 */

/**
 * @swagger
 * /Blog:
 *   post:
 *     summary: Blog ekle
 *     tags: [Blog]
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
 *                 description: "Çok dilli başlık örneği: tr ve en anahtarları ile JSON string"
 *               slug:
 *                 type: string
 *                 description: "Çok dilli slug örneği: tr ve en anahtarları ile JSON string"
 *               description:
 *                 type: string
 *                 description: "Çok dilli açıklama örneği: tr ve en anahtarları ile JSON string"
 *               content:
 *                 type: string
 *                 description: "Çok dilli içerik örneği: tr ve en anahtarları ile JSON string"
 *               order:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               process_at:
 *                 type: string
 *                 format: date-time
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Blog başarıyla eklendi
 *   get:
 *     summary: Blogları listele (pagination)
 *     tags: [Blog]
 *     parameters:
 *       - in: query
 *         name: pageNumber
 *         schema:
 *           type: integer
 *         description: "Sayfa numarası"
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: "Sayfa başı kayıt"
 *     responses:
 *       200:
 *         description: Blog listesi
 *
 * /Blog/{id}:
 *   get:
 *     summary: Blog detay
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blog detay
 *   put:
 *     summary: Blog güncelle
 *     tags: [Blog]
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
 *                 description: "Çok dilli başlık örneği: tr ve en anahtarları ile JSON string"
 *               slug:
 *                 type: string
 *                 description: "Çok dilli slug örneği: tr ve en anahtarları ile JSON string"
 *               description:
 *                 type: string
 *                 description: "Çok dilli açıklama örneği: tr ve en anahtarları ile JSON string"
 *               content:
 *                 type: string
 *                 description: "Çok dilli içerik örneği: tr ve en anahtarları ile JSON string"
 *               order:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               process_at:
 *                 type: string
 *                 format: date-time
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Blog güncellendi
 *   delete:
 *     summary: Blog sil
 *     tags: [Blog]
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
 *         description: Blog silindi
 *
 * /Blog/Order:
 *   post:
 *     summary: Blog sıralama güncelle
 *     tags: [Blog]
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
const blogController = require('../controllers/blogController');
const blogUpload = require('../middleware/blogUpload');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, blogUpload.single('file'), blogController.createBlog);
router.get('/:id', blogController.getBlog);
router.get('/', blogController.getAllBlogs);
router.put('/:id', auth, blogUpload.single('file'), blogController.updateBlog);
router.delete('/:id', auth, blogController.deleteBlog);
router.post('/order', auth, blogController.updateBlogOrder);

module.exports = router;
