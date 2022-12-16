const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const EventRepo = require('../utils/event.repository');

router.get('/', list);
router.get('/event/:id_event', eventinfo);


async function list(request, response){
    events = await EventRepo.getAllEvent_schedule();
    console.log(events);

    response.render('list_event_view', {'events': events});

}

async function eventinfo(request, response){

    console.log(request.params.id_event);
    ev = await EventRepo.getOneEvent(request.params.id_event);
    drinks = await EventRepo.getDrinks_of_an_event(request.params.id_event);
    Music = await EventRepo.getMusic_of_an_event(request.params.id_event);
    

    response.render('Event_info', {'e': ev, 'Drinks':drinks, 'Musics':Music})

}





module.exports = router;