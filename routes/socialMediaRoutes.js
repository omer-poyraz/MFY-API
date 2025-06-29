const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMediaController');
const authMiddleware = require('../middleware/authMiddleware');
const socialMediaUpload = require('../middleware/socialMediaUpload');

/**
 * @swagger
 * /SocialMedia:
 *   get:
 *     summary: Get all social media
 *     tags: [SocialMedia]
 *     responses:
 *       200:
 *         description: List of social media
 */
router.get('/SocialMedia', socialMediaController.getAll);

/**
 * @swagger
 * /SocialMedia/{id}:
 *   get:
 *     summary: Get social media by id
 *     tags: [SocialMedia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Social media info
 *       404:
 *         description: Not found
 */
router.get('/SocialMedia/:id', socialMediaController.getById);

/**
 * @swagger
 * /SocialMedia:
 *   post:
 *     summary: Add social media
 *     tags: [SocialMedia]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *               url:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Social media created
 *       400:
 *         description: Error
 */
router.post('/SocialMedia', authMiddleware, socialMediaUpload.single('file'), socialMediaController.add);

/**
 * @swagger
 * /SocialMedia/{id}:
 *   put:
 *     summary: Update social media
 *     tags: [SocialMedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               url:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Social media updated
 *       404:
 *         description: Not found
 */
router.put('/SocialMedia/:id', authMiddleware, socialMediaUpload.single('file'), socialMediaController.update);

/**
 * @swagger
 * /SocialMedia/{id}:
 *   delete:
 *     summary: Delete social media
 *     tags: [SocialMedia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Social media deleted
 *       404:
 *         description: Not found
 */
router.delete('/SocialMedia/:id', authMiddleware, socialMediaController.remove);

module.exports = router;
