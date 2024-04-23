const express = require('express');
const router = express.Router();
const { Categorie } = require('../models')


router.get('/', async (req, res) => {
try {
    const categories = await Categorie.findAll();
    res.json(categories);
} catch (error) {
    res.status(500).send(error.toString());
}});

module.exports = router;