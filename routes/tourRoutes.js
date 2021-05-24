const tourController = require('./../controllers/tourController')
const express = require('express')
const router = express.Router();

/*
Router Param allows us to deal with the value we 
have on the url, in this case, is the id */

router.param('id', tourController.checkID)

//create a checkBody middleware function
//check if the boday contains the name and price property
//If not, send back 400 (bad request)

/******************
  ROUTES
*****************/

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody,tourController.createTour) //the first parameter is a middleware function we create to check the body properties.

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)



module.exports = router;