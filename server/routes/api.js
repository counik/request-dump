const express = require("express");
const router = express.Router();
const requestsController = require("../controllers/requestsController");

router.get("/myEndpoint/inspect", requestsController.getRequests);

router.post("/goodEndpoint/1", requestsController.saveRequest);
router.post("/goodEndpoint/2", requestsController.saveRequest);
router.post("/goodEndpoint/3", requestsController.saveRequest);
router.post("/goodEndpoint/4", requestsController.saveRequest);
router.post("/goodEndpoint/5", requestsController.saveRequest);
router.post("/goodEndpoint/validSignature", requestsController.saveRequest);

router.post("/badEndpoint/10secondDelay", requestsController.delayRequest(10));
router.post("/badEndpoint/301status", requestsController.specialStatus(301));
router.post("/badEndpoint/404status", requestsController.specialStatus(404));
router.post("/badEndpoint/500status", requestsController.specialStatus(500));
router.post("/badEndpoint/randomStatus", requestsController.randomStatus);
router.post(
  "/badEndpoint/invalidSignature",
  requestsController.returnInvalidSignature
);
// router.post("/badEndpoint/invalidCertificate", requestsController.);

// Used for testing with external webhook providers
router.post("/openEndpoint", requestsController.saveRequest);

module.exports = router;
