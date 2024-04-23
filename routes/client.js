const express = require('express');
const router = express.Router();
const { Client } = require('../models')


router.get('/', async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

module.exports = router;