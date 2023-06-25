const express = require('express');
const router = express.Router();
const WorkItems = require('../models/WorkItems');  // import your model

router.post('/', function(req, res) {
    // Extract data from the request body
    const { date, startTime, endTime, breakDuration, projectNumber, subprojectNumber, activity, reviewRequired } = req.body;

    // Create a new record in the database
    WorkItems.create({
        date,
        startTime,
        endTime,
        breakDuration,
        projectNumber,
        subprojectNumber,
        activity,
        reviewRequired
    })
        .then(workItem => {
            // Send the newly created record back in the response
            res.status(201).json(workItem);
        })
        .catch(err => {
            // Send an error message back in the response
            res.status(500).json({ error: err.message });
        });
});
module.exports = router;
