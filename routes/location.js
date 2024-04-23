const express = require('express');
const router = express.Router();
const { Location, Client, Bijou } = require('../models');

/**
 * @openapi
 * /location:
 *   get:
 *     tags:
 *       - Location
 *     summary: Retrieves a list of all locations with detailed client and bijou data
 *     responses:
 *       200:
 *         description: A list of locations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 *       500:
 *         description: Internal server error
 */


router.get('/', async (req, res) => {
    try {
        const locations = await Location.findAll({
            include: [
                {
                    model: Client,
                    attributes: ['nom', 'prenom'],
                },
                {
                    model: Bijou,
                    attributes: ['description', 'prixVente', 'prixLocation']
                }
            ]
        });
        res.json(locations);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

module.exports = router;
