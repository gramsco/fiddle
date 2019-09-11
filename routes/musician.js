const express = require("express")
const router = new express.Router();
const musicianModel = require("../models/musician")
const concertModel = require("../models/concert")

router.get("/:id", (req, res) => {

    musicianModel
        .findById(req.params.id)
        .then(dbmusician => {
            concertModel
                .find({musician:req.params.id})
                .then(dbconcert => {
                    console.log(dbmusician, dbconcert)
                    res.render("musicians/musician_info",
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