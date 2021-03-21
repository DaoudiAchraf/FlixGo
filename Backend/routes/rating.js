const express = require('express');
const router = express.Router();

const ratingController = require('../Controller/rating');
const Security = require('../Controller/router_protector');



router.post('/api/rate/:movieID',Security.checkAuth,ratingController.setRate);
router.get('/api/rate/:id',ratingController.getRate);
router.get('/api/getUserRate/:id',Security.checkAuth,ratingController.getUserRate);
router.get('/api/getMostRated/',ratingController.getMostRated);
module.exports = router;
