const express = require('express');
const router = express.Router();
const insightController = require('../controllers/InsightController');

// API routes
router.get('/data', insightController.getData);
router.post('/data', insightController.addData);
router.put('/data/:id', insightController.updateData);
router.delete('/data/:id', insightController.deleteData);

module.exports = router;

