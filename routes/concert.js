const express = require("express")
const router = new express.Router();
const concertModel = require("../models/concert")
const musicianModel = require("../models/musician")



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