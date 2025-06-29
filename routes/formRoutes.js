const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

/**
 * @swagger
 * /Forms:
 *   get:
 *     summary: Get all forms (paginated)
 *     tags: [Form]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: List of forms
 *   post:
 *     summary: Create a new form
 *     tags: [Form]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               mail:
 *                 type: string
 *               phone:
 *                 type: string
 *               company:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       201:
 *         description: Form created
 */
router.get('/Forms', formController.getForms);
router.post('/Forms', formController.createForm);

/**
 * @swagger
 * /Forms/{id}:
 *   delete:
 *     summary: Delete a form by id
 *     tags: [Form]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Form id
 *     responses:
 *       200:
 *         description: Form deleted
 *       404:
 *         description: Form not found
 */
router.delete('/Forms/:id', formController.deleteForm);

module.exports = router;
