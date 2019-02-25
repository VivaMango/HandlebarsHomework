var express = require("express");
var router = express.Router();
var model = require("../models/model.js");

console.log(`APPCONTROLLER.JS LOADED`)

// GET Route responds to client request by sending our Handlebars HTML with res.render
router.get("/" , function(req , res) {
    model.all(function(data) {
        var hbsObject = { drifters: data };
        console.log(`HBS OBJECT ${hbsObject} APPCONTROLLER.JS 13`)
        res.render("index" , hbsObject); //index is index.handlebars
    });
});


// POST Route lets client add new drifter to drifters_db from client.js
router.post("/api/drifters" , function(req , res) {
    model.create(["name", "face_photo_link" , "car_name" , "car_photo_link"] , [req.body.name , req.body.face_photo_link , req.body.car_name , req.body.car_photo_link], function(result) {
        res.json({ id: result.insertId });
    });
});


// PUT Route lets us update the race_status boolean from client.js
router.put("/api/drifters/:id" , function(req , res) {
    var condition = `id = ${req.params.id}`
    console.log(`UPDATE RACE CONDITION ${condition} APPCONTROLLER.JS 21`)
    model.update(
        {
            race_status: req.body.race_status
        },
        condition,
        function(result) {
            if (result.affectedRows === 0) {
                // Drifter with :id Not Found
                return res.status(404).end();
            }
            // Successful Update
            return res.status(200).end();
        }
    );
});

//Export routes to server.js to respond when listening.
module.exports = router;