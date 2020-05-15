const express = require('express');
const router = express.Router();
const { Film } = require("../model/filmsInProduction");


router.get('/films', (req, res)=>{



    (async () => {




        let rest = await Film.find({});
        console.log(rest);
        res.send(rest)

    })();

});

router.get('/films/:id', (req, res)=>{



    (async () => {
        let rest = await Film.findOne({id: req.params.id});
        console.log(rest);
        res.send(rest)

    })();

});

module.exports = router;
