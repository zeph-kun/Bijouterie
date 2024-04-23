const express = require('express');
const router = express.Router();
const { Bijou } = require('../models')
const { Op } = require('sequelize');


/**
 * @openapi
 * /bijou:
 *   get:
 *     tags:
 *       - Bijou
 *     summary: Retrieves a list of all bijou with pagination and optional search by description
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: Page number starting from 0
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: Number of items per page
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         required: false
 *         description: Search term for description
 *     responses:
 *       200:
 *         description: Paginated list of bijoux
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bijou'
 *       404:
 *         description: Bijoux not found
 */

router.get('/', async (req, res) => {
    const limit = parseInt(req.query.limit, 10);
    const offset = parseInt(req.query.offset, 10);
    const description = req.query.description;
    try {
        const whereDes = description ? { description: { [Op.like]: `%${description}%` } } : {};

        const bijou = await Bijou.findAll({
            where: whereDes,
            limit: !isNaN(limit) ? limit : undefined,
            offset: !isNaN(offset) ? offset : undefined
        });
        res.json(bijou);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


/**
 * @openapi
 * /bijou/{id}:
 *   get:
 *     tags:
 *       - Bijou
 *     summary: Recupère un bijou par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails du Bijou
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bijou'
 *       404:
 *         description: Bijou non trouvé
 *
 */


router.get('/:id', async (req, res) => {
    try {
        const bijou = await Bijou.findByPk(req.params.id, {
            include: [{
                association: 'Categorie',
                attributes: ['name']
            }]
        });
        if (bijou) {
            res.json(bijou);
        } else {
            res.status(404).send('Bijou non trouvé');
        }
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


module.exports = router;