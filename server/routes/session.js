const express = require('express');
const router = express.Router();
const {Session} = require("../model/session");
const {CinemaHalls} = require("../model/cinemaHalls");
const {SoldTickets} = require("../model/soldTicket");


router.get('/sessions', (req, res) => {


    (async () => {

        let halls = await CinemaHalls.find({});

        // Session.create({
        //     id: 2,
        //     data: new Date(2020, 5, 15, 20, 45),
        //     hall: {id: halls[0].id,
        //         typeWatch: halls[0].typeWatch,
        //         availableSits: halls[0].availableSits}
        // })
        // Session.create({
        //     id: 2,
        //     data: new Date(2020, 5, 15, 20, 45),
        //     hall: {id: halls[1].id,
        //         typeWatch: halls[1].typeWatch,
        //         availableSits: halls[1].availableSits}
        // })
        //
        // Session.create({
        //     id: 3,
        //     data: new Date(2020, 6, 15, 12, 30),
        //     hall: {id: halls[2].id,
        //         typeWatch: halls[2].typeWatch,
        //         availableSits: halls[2].availableSits}
        // })
        // Session.create({
        //     id: 3,
        //     data: new Date(2020, 6, 15, 14, 50),
        //     hall: {id: halls[3].id,
        //         typeWatch: halls[3].typeWatch,
        //         availableSits: halls[3].availableSits}
        // })
        //
        // Session.create({
        //     id: 4,
        //     data: new Date(2020, 6, 15, 18, 50),
        //     hall: {id: halls[4].id,
        //         typeWatch: halls[4].typeWatch,
        //         availableSits: halls[4].availableSits}
        // })
        // Session.create({
        //     id: 4,
        //     data: new Date(2020, 6, 15, 20, 30),
        //     hall: {id: halls[5].id,
        //         typeWatch: halls[5].typeWatch,
        //         availableSits: halls[5].availableSits}
        // })
        //
        // Session.create({
        //     id: 5,
        //     data: new Date(2020, 6, 15, 12, 50),
        //     hall: {id: halls[0].id,
        //                 typeWatch: halls[0].typeWatch,
        //                 availableSits: halls[0].availableSits}
        // })
        // Session.create({
        //     id: 5,
        //     data: new Date(2020, 6, 15, 15, 40),
        //     hall: {id: halls[5].id,
        //         typeWatch: halls[5].typeWatch,
        //         availableSits: halls[5].availableSits}
        // })
        // Session.create({
        //     id: 5,
        //     data: new Date(2020, 6, 15, 20, 30),
        //     hall: {id: halls[5].id,
        //         typeWatch: halls[5].typeWatch,
        //         availableSits: halls[5].availableSits}
        // })
        //
        // Session.create({
        //     id: 6,
        //     data: new Date(2020, 6, 15, 8, 40),
        //     hall: {id: halls[3].id,
        //         typeWatch: halls[3].typeWatch,
        //         availableSits: halls[3].availableSits}
        // });
        // Session.create({
        //     id: 6,
        //     data: new Date(2020, 6, 15, 12, 10),
        //     hall: {id: halls[5].id,
        //                 typeWatch: halls[5].typeWatch,
        //                 availableSits: halls[5].availableSits}
        // });
        //
        // Session.create({
        //     id: 7,
        //     data: new Date(2020, 6, 15, 14, 45),
        //     hall: {id: halls[1].id,
        //         typeWatch: halls[1].typeWatch,
        //         availableSits: halls[1].availableSits}
        // });
        //
        // Session.create({
        //     id: 8,
        //     data: new Date(2020, 6, 15, 18, 10),
        //     hall: {id: halls[4].id,
        //         typeWatch: halls[4].typeWatch,
        //         availableSits: halls[4].availableSits}
        // });
        // Session.create({
        //     id: 8,
        //     data: new Date(2020, 6, 15, 15, 20),
        //     hall: {id: halls[2].id,
        //         typeWatch: halls[2].typeWatch,
        //         availableSits: halls[2].availableSits}
        // });
        //
        // Session.create({
        //     id: 9,
        //     data: new Date(2020, 6, 15, 14, 40),
        //     hall: {id: halls[1].id,
        //                 typeWatch: halls[1].typeWatch,
        //                 availableSits: halls[1].availableSits}
        // });
        // Session.create({
        //     id: 9,
        //     data: new Date(2020, 6, 15, 11, 30),
        //     hall: {id: halls[0].id,
        //                 typeWatch: halls[0].typeWatch,
        //                 availableSits: halls[0].availableSits}
        // });
        // Session.create({
        //     id: 9,
        //     data: new Date(2020, 6, 15, 16, 20),
        //     hall: {id: halls[3].id,
        //                 typeWatch: halls[3].typeWatch,
        //                 availableSits: halls[3].availableSits}
        // });
        //
        // Session.create({
        //     id: 10,
        //     data: new Date(2020, 6, 15, 13, 30),
        //     hall: {id: halls[5].id,
        //                 typeWatch: halls[5].typeWatch,
        //                 availableSits: halls[5].availableSits}
        // });


        let rest = await Session.find({});
        console.log(rest);
        res.send(rest)

    })();

});
router.get('/sessions/:id', (req, res)=>{


    (async () => {


        let rest = await Session.find({id: req.params.id});
        console.log(rest);
        res.send(rest)

    })();

});

module.exports = router;
