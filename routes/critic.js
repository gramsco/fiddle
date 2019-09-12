const express = require("express");
const router = new express.Router();
const critiqueModel = require("../models/critique")
const concertModel = require("../models/concert")
const musicianModel = require("../models/musician")




router.get("/:id", (req, res) => {

    critiqueModel
        .findById(req.params.id)
        .then(critique => {
            
            res.render("critics/critic", { critique })
        })
                            
        .catch(err => console.log(err))
})



module.exports = router