const express = require('express');
const router = express.Router();
const { SoldTickets } = require("../model/soldTicket");
const { Film } = require("../model/filmsInProduction");
const { Session } = require("../model/session");

router.post('/soldTicket', (req, res)=>{


    (async () => {
        let film = await Film.findOne({id: +req.body.filmId})
        let rest = await SoldTickets.find({});
        let doc = await Session.findOne({_id: req.body.sessionID});
        console.log(doc.hall.availableSits, 333333333333);
        await Session.update({_id: req.body.sessionID}, {
        "hall.availableSits": doc.hall.availableSits-1
        });

        console.log(req.body);

        SoldTickets.create({
            id: rest.length+1,
            watcherName: req.body.watcherName,
            watcherEmail: req.body.watcherEmail,
            typeTicket: req.body.type,
            filmType: req.body.filmType,
            dateSession: req.body.dateSession,
            dateTimeBy: req.body.dateBye,
            film: film.name,
            hall: req.body.hall,
            prise: req.body.prise
        })

        rest = await SoldTickets.find({});

        await Session.update({_id: req.body.sessionID}, {
            $push: { soldTickets: rest[rest.length-1] }
        });

        console.log(req.body, 22);

        res.send(rest)

    })();

});

router.get('/allTicket', (req, res)=>{

    (async () => {


        let rest = await SoldTickets.find({});
        res.send(rest)

    })();

});

router.get('/allTicket/:id', (req, res)=>{

    (async () => {


        let rest = await SoldTickets.find({});
        res.send(rest[req.params.id])

    })();

});

module.exports = router;
