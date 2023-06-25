const express = require('express');
const router = express.Router();
const WorkItems = require('../models/WorkItems');

router.get('/', async (req, res) => {
    try {
        const workItems = await WorkItems.findAll();
        res.json(workItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'An error occurred.'});
    }
});

module.exports = router;
