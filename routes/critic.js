const express = require("express");
const router = new express.Router();
const critiqueModel = require("../models/critique")
const concertModel = require("../models/concert")
const musicianModel = require("../models/musician")


router.get("/:id", (req, res) => {

    critiqueModel
        .findById(req.params.id)
        .then(critique => {
            concertModel
                .findById(dbCritique.concert)
                .then(concert => {
                    musicianModel
                        .findById(dbConcert.musician)
                        .then(musician => {
                            res.render("critics/critic", {
                                critique,
                                concert,
                                musician
                            })
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        
        })
        .catch(err => console.log(err))
})



module.exports = router