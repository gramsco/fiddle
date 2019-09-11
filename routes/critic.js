const express = require("express");
const router = new express.Router();
const critiqueModel = require("../models/critique")
const concertModel = require("../models/concert")
const musicianModel = require("../models/musician")

router.get("/:id", (req, res) => {

    critiqueModel
        .findById(req.params.id)
        .then(dbCritique => {
            concertModel
                .findById(dbCritique.concert)
                .then(dbConcert => {
                    musicianModel
                        .findById(dbConcert.musician)
                        .then(dbMusician => {
                            res.render("critics/critic", {
                                critique: dbCritique,
                                concert: dbConcert,
                                musician: dbMusician
                            })
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        
        })
        .catch(err => console.log(err))
})



module.exports = router