const express = require("express")
const router = new express.Router();
const concertModel = require("../models/concert")
const musicianModel = require("../models/musician")

router.get("/all", (req, res) => {
    
    concertModel
        .find()
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
                            musician: dbmusician
                        })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})



module.exports = router