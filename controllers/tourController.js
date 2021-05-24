const fs = require('fs')

/******************
   ROUTE HANDLERS
*****************/

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`)
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}

exports.getAllTours = (req, res) => {
    console.log(req.requestTime)
    res
        .status(200)
        .json({
            status: 'success',
            result: tours.length,
            requestedAt: req.requestTime,
            data: {
                tours
            }
        })
}

exports.getTour = (req, res) => {
    //console.log(req.params)
    const id = req.params.id * 1; // to convert to a number
    const tour = tours.find(tour => tour.id === id)

    res
        .status(200)
        .json({
            status: 'success',
            data: {
                tour
            }
        })
}

exports.createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res
            .status(201)
            .json({
                status: 'success',
                data: {
                    tour: newTour
                }
            })
    })
}

exports.updateTour = (req, res) => {
    (req, res) => {
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    }
}

exports.deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
}

