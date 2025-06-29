const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /Settings:
 *   get:
 *     summary: Get settings
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: Settings info
 */
router.get('/Settings', settingsController.getSettings);

/**
 * @swagger
 * /Settings:
 *   put:
 *     summary: Update settings
 *     tags: [Settings]
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
 *                 example: { "tr": "Başlık", "en": "Title" }
 *               description:
 *                 type: object
 *                 example: { "tr": "Açıklama", "en": "Description" }
 *               copyright:
 *                 type: object
 *                 example: { "tr": "Telif", "en": "Copyright" }
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               mail:
 *                 type: string
 *               working:
 *                 type: string
 *               map:
 *                 type: string
 *     responses:
 *       200:
 *         description: Settings updated
 *       404:
 *         description: Not found
 */
router.put('/Settings', authMiddleware, settingsController.updateSettings);

module.exports = router;
