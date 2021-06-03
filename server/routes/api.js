const express = require('express');
const router = express.Router();
const requestsController = require('../controllers/requestsController');

// Incoming route
router.all('/bin', requestsController.saveRequest);
// Route for frontend to pull data to display
router.get('/myEndpoint/inspect', requestsController.getRequests);

// For testing with different response delays and statuses
router.post('/badEndpoint/10secondDelay', requestsController.delayRequest(10));
router.post('/badEndpoint/301status', requestsController.specialStatus(301));
router.post('/badEndpoint/404status', requestsController.specialStatus(404));
router.post('/badEndpoint/500status', requestsController.specialStatus(500));
router.post('/badEndpoint/randomStatus', requestsController.randomStatus);

module.exports = router;
