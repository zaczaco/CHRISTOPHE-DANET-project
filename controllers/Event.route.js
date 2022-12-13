// controllers/cars.route.js
const express = require('express');
const router = express.Router();
const carRepo = require('../utils/cars.repository');

router.get('/', carRootAction);
router.get('/list', carListAction);
router.get('/show/:carId', carShowAction);
router.get('/del/:carId', carDelAction);
router.get('/edit/:carId', carEditAction);
router.post('/update/:carId', carUpdateAction);

// http://localhost:9000/cars
function carRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/cars/list");
}
async function carListAction(request, response) {
    // response.send("LIST ACTION");
    var cars = await carRepo.getAllCars();
    // console.log(cars);
    //var flashMessage = request.session.flashMessage; // express-flash ...
    //request.session.flashMessage = "";
    
    response.render("cars_list", { "cars": cars});
}
async function carShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneCar = await carRepo.getOneCar(request.params.carId);
    response.render("cars_show", { "oneCar": oneCar });
}
async function carEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await carRepo.getAllBrands();
    var carId = request.params.carId;
    if (carId!=="0")
        var car = await carRepo.getOneCar(carId);
    else
        var car = carRepo.getBlankCar();
    response.render("cars_edit", { "oneCar": car, "brands": brands });
}
async function carDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await carRepo.delOneCar(request.params.carId);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/cars/list");
}
async function carUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var carId = request.params.carId;
    if (carId==="0") carId = await carRepo.addOneCar(request.body.car_brand);

    var isFancy = request.body.car_isFancy === undefined ? 0 : 1; 
    var numRows = await carRepo.editOneCar(carId, 
        request.body.car_brand, 
        request.body.car_name, 
        request.body.car_baseprice, 
        isFancy, 
        request.body.car_realPrice);

    request.session.flashMessage = "ROWS UPDATED: "+numRows;
    response.redirect("/cars/list");
}

module.exports = router;