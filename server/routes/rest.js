const express = require('express');
const router = express.Router();
const { Rest } = require("../model/rest");


router.get('/rest', (req, res)=>{


    (async () => {

        let rest = await Rest.find({});
        console.log(rest);
        res.send(rest)

    })();

});

module.exports = router;
