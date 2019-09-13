const express = require("express")
const router = new express.Router();
const concertModel = require("../models/concert")
const musicianModel = require("../models/musician")
const userModel = require("../models/user")

router.get("/all", (req, res) => {
    
    concertModel
        .find().sort({ 'date': -1 })
        .then(dbconcert => {
            musicianModel
                .find()
                .then(dbMusicians => {
                    
                    res.render("concerts/all_concerts", {
                        concerts: dbconcert,
                        musicians: dbMusicians,
                    })
                })
                .catch(err => console.log(err))
        })
            
        .catch(err => console.log(err))
})

router.post(`/:id`, (req, res) => {
    userModel
        .find({ username: req.params.id })
        .then(res.send(200))
    .catch(err => console.log(err))

})

router.get("/:id", (req, res) => {
    concertModel
        .findById(req.params.id)
        .then(dbconcert => {
            musicianModel
                .findById(dbconcert.musician)
                .then(dbmusician => {
                    console.log(dbmusician, dbconcert)
                    res.render("concerts/concert_info",
                        {
                            concert: dbconcert,
                            musician: dbmusician,
                            scripts: ["fav_concert.js"]

                        })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})



module.exports = router