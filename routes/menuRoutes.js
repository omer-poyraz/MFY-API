const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const authMiddleware = require('../middleware/authMiddleware');
const menuUpload = require('../middleware/menuUpload');

/**
 * @swagger
 * /Menu:
 *   post:
 *     summary: Create a new menu
 *     tags: [Menu]
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
 *             properties:
 *               title:
 *                 type: string
 *                 example: '{"tr":"Ana Menü","en":"Main Menu"}'
 *               file:
 *                 type: string
 *                 format: binary
 *               parentId:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Menu created
 *       400:
 *         description: Error
 */
router.post('/Menu', authMiddleware, menuUpload.single('file'), menuController.createMenu);

/**
 * @swagger
 * /Menu:
 *   get:
 *     summary: Get all menus
 *     tags: [Menu]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of menus
 */
router.get('/Menu', menuController.getAllMenus);

/**
 * @swagger
 * /Menu/{id}:
 *   get:
 *     summary: Get menu by id
 *     tags: [Menu]
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
 *         description: Menu info
 *       404:
 *         description: Not found
 */
router.get('/Menu/:id', menuController.getMenu);

/**
 * @swagger
 * /Menu/{id}:
 *   put:
 *     summary: Update menu
 *     tags: [Menu]
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
 *                 example: '{"tr":"Güncellenmiş","en":"Updated"}'
 *               file:
 *                 type: string
 *                 format: binary
 *               parentId:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Menu updated
 *       404:
 *         description: Not found
 */
router.put('/Menu/:id', authMiddleware, menuUpload.single('file'), menuController.updateMenu);

/**
 * @swagger
 * /Menu/{id}:
 *   delete:
 *     summary: Delete menu
 *     tags: [Menu]
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
 *         description: Menu deleted
 *       404:
 *         description: Not found
 */
router.delete('/Menu/:id', authMiddleware, menuController.deleteMenu);

/**
 * @swagger
 * /Menu/Order:
 *   post:
 *     summary: Update menu order
 *     tags: [Menu]
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
 *                       type: string
 *                     order:
 *                       type: integer
 *                 example:
 *                   - id: "7511c5b4-dc84-42e1-87e1-ab3ebcf7c7ed"
 *                     order: 1
 *                   - id: "b8e16b7d-fd05-44c0-b458-7270d61c472d"
 *                     order: 2
 *     responses:
 *       200:
 *         description: Order updated
 *       400:
 *         description: Error
 */
router.post('/Menu/Order', authMiddleware, menuController.updateMenuOrder);

module.exports = router;