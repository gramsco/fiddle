const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const musicianModel = require("../models/musician");

router.get("/:id", (req, res) => {

    userModel
        .findById(req.params.id)
        .then(userRes => {

            musicianModel
                .find({_id:userRes.fav_musicians})
                .then(musiciansRes => {
                    res.render("user/user", {
                        user: userRes,
                        musicians: musiciansRes
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))


})



module.exports = router