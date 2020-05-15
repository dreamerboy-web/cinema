const express = require('express');
const router = express.Router();
const { Rest } = require("../model/rest");


router.get('/users', (req, res)=>{



    (async () => {
        // User.create({
        //     name: 'roy agasthyan',
        //     username: 'roy',
        //     password: '123'
        // })

        let users = await Rest.find({})
        console.log(users);
        res.send(users)

    })();




    // User.find((
    //     (err, doc) => {
    //
    //         let age = doc.age;
    //         if (err) return res.status(400).send(err);
    //         return res.status(200).json(doc)
    //     }) )
});

module.exports = router;
