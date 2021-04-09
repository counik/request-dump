const express = require("express");
const router = express.Router();
const requestsController = require("../controllers/requestsController");
// Import validators

// router.get("/dumps", dumpsController.getDumps);
// router.post("/dumps", dumpsController.createDump);
// router.get("/dumps/:id", dumpsController.getDump);
router.all("/myEndpoint", requestsController.saveRequest);
router.get("/myEndpoint/inspect", requestsController.getRequests);
module.exports = router;
