const express = require('express');
const router = express.Router();
const plrep = require('../utils/place.repo')
const eventrep = require('../utils/event.repository')


router.get('/create_event', CreateEv);
router.post('/create_event_finish', CreateEvFinish)


async function CreateEv(request, response){

    place = await plrep.Get_name_and_id_place();

    response.render('new_event_view', {'place': place});

}

async function CreateEvFinish(request, response){

    console.log(request.body.name_event);
    console.log(request.body.superviser);
    console.log(request.body.start_date);
    console.log(request.body.end_date);
    console.log(request.body.Price);
    console.log(request.body.id_place);

    await eventrep.createOneEvent_schedule(request.body.name_event, request.body.superviser, request.body.start_date, request.body.end_date, request.body.Price, request.body.id_place);
    
    response.redirect('/user');

}





module.exports = router;