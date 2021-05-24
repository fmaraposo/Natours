const tourController = require('./../controllers/tourController')
const express = require('express')
const router = express.Router();

/*
Router Param allows us to deal with the value we 
have on the url, in this case, is the id */

router.param('id', tourController.checkID)

/******************
  ROUTES
*****************/

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour)

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)



module.exports = router;