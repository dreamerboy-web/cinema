const express = require('express');
const router = express.Router();
const { Soon } = require("../model/soonFilms");


router.get('/soon', (req, res)=>{


    (async () => {

        let rest = await Soon.find({});
        console.log(rest);
        res.send(rest)

    })();

});

module.exports = router;
