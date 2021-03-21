const express = require("express");
const router = express.Router();

const analyticsController = require("../Controller/analytics");

router.get('/api/getAccountsNumber',analyticsController.accountsNumber);
router.get('/api/getReservsPerFilm',analyticsController.reservationsPerfilm);

module.exports = router;
