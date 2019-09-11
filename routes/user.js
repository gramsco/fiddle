const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const musicianModel = require("../models/musician");
const critiqueModel = require("../models/critique")

//sera à modifier avec cache quand logged in / logged out

router.get("/:id/edit", (req, res) => {

    userModel
        .findById(req.params.id)
        .then(dbres => {
            res.render("user/edit", dbres)
        })
        .catch(err => console.log(err))

})


router.post("/:id/edit", (req, res) => {
    
    const { username, email } = req.body
    console.log(username,email)
    userModel
        .findByIdAndUpdate(req.params.id,{
            username,email
        })
        .then((dbres) => {
            console.log(`${dbres.username} updated!`)
            res.redirect(`/user/${dbres._id}`)
        })
        .catch(err => console.log(err))
    
})

router.get("/:id/favs", (req, res) => {

    userModel
        .findById(req.params.id)
        .then(dbUser => {
            musicianModel
                .find()
                .then(dbMusicians => {
                    let favs = []
                    let musicians = []
                    dbMusicians.forEach(element => {
                        if (dbUser.fav_musicians.includes(element._id)) favs.push(element)
                        else {
                            musicians.push(element)
                        }
                    })
        
                    res.render("user/edit_favs", {
                        id: req.params.id,
                        favs,
                        musicians
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

})


router.get("/:id", (req, res) => {

    userModel
        .findById(req.params.id)
        .then(userRes => {

            musicianModel
                .find({ _id: userRes.fav_musicians })
                .then(musiciansRes => {

                    critiqueModel
                        .find({ user: req.params.id })
                        .then(dbCritiques => {

                            res.render("user/user", {
                                user: userRes,
                                musicians: musiciansRes,
                                critiques: dbCritiques
                            })
                        })
                        .catch(err => console.log(err))

                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})





module.exports = router