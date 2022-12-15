// controllers/cars.route.js
const express = require('express');
const router = express.Router();
const EventRepo = require('../utils/event.repository');

router.get('/', Event_scheduleRootAction);
router.get('/list', Event_scheduleListAction);
router.get('/show/:Id_Event_schedule', Event_scheduleShowAction);
router.get('/del/:Id_Event_schedule', Event_scheduleDelAction);
router.get('/edit/:Id_Event_schedule', Event_scheduleEditAction);
router.post('/update/:Id_Event_schedule', Event_scheduleUpdateAction);

// http://localhost:9000/cars
function Event_scheduleRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/Id_Event_schedule/list");
}
async function Event_scheduleListAction(request, response) {
    // response.send("LIST ACTION");
    var Event = await EventRepo.getAllEvent_schedule();
    // console.log(cars);
    //var flashMessage = request.session.flashMessage; // express-flash ...
    //request.session.flashMessage = "";
    
    response.render("Event_schedule_show", { "Event_schedule": Event});
}
async function Event_scheduleShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneEvent_schedule = await EventRepo.getOneEvent_schedule(request.params.Id_Event_schedule);
    response.render("Event_schedule_show", { "One": oneEvent });
}
async function Event_scheduleEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await EventRepo.getAllBrands();
    var Id_Event_schedule = request.params.Id_Event_schedule;
    if (Id_Event_schedule!=="0")
        var Event = await EventRepo.getOneEvent_schedule(Id_Event_schedule);
    else
        var Event = EventRepo.getBlankEvent_schedule();
    response.render("Event_schedule_edit", { "oneEvent_schedule": Event_schedule });
}
async function Event_scheduleDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await EventRepo.delOneEvent_schedule(request.params.Id_Event_schedule);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/Event_schedule/list");
}
async function Event_scheduleUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var Id_Event_schedule = request.params.Id_Event_schedule;
    if (Id_Event_schedule==="0") Id_Event_schedule = await EventRepo.addOneEvent_schedule(request.body.Name_event);

    var isFancy = request.body.Event_isFancy === undefined ? 0 : 1; 
    var numRows = await EventRepo.editOneEvent_schedule(Id_Event_schedule, 
        request.body.Event_brand, 
        request.body.Event_name, 
        request.body.Event_baseprice, 
        isFancy, 
        request.body.Event_realPrice);

    request.session.flashMessage = "ROWS UPDATED: "+numRows;
    response.redirect("/Event_schedule/list");
}

module.exports = router;