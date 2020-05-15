const express = require('express');
const router = express.Router();
const { CinemaHalls } = require("../model/cinemaHalls");


router.get('/cinemaHalls', (req, res)=>{


    (async () => {


        let rest = await CinemaHalls.find({});
        let sortRest = rest.sort((a, b) => a.id - b.id)
        console.log(sortRest);
        res.send(sortRest)

    })();

});

router.get('/cinemaHalls/:id', (req, res)=>{


    (async () => {


        let rest = await CinemaHalls.find({id: req.params.id});
        console.log(rest);
        res.send(rest)

    })();

});



module.exports = router;
