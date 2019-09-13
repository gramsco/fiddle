const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const musicianModel = require("../models/musician");
const critiqueModel = require("../models/critique")
const concertModel = require("../models/concert")
const fileUploader = require("../cloudinary");


//sera à modifier avec cache quand logged in / logged out



router.get("/:id/edit", (req, res) => {

    userModel
        .findById(req.params.id)
        .then(dbres => {
            res.render("user/edit", dbres)
        })
        .catch(err => console.log(err))

})

router.get("/:id/new_review", (req, res) => {
 
    const id = req.params.id
    concertModel
        .find()
        .then(concerts => {
            res.render("user/new_review", {concerts,id})
        })
        .catch(err => console.log(err))
})

router.post("/new_review", (req, res) => {

    
    console.log(req.body)

    const {concert,text,title,user} = req.body

    let temporal = Date()
    console.log(temporal)
    critiqueModel
        .create({ concert, text, title,user,temporal })
        .then((crit) => {
            console.log(crit)
            res.redirect("/")
        })
        .catch(err => console.log(err))   
})



router.post("/:id/edit", fileUploader.single("profile_image"), (req, res) => {
    
    const { username, email} = req.body
    console.log(username, email)
    let profile_image;
    if (req.file) profile_image = req.file.secure_url
    else profile_image = "Orange.jpg"
    
    userModel
        .findByIdAndUpdate(req.params.id,{
            username,email,profile_image
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

router.get("/profile/:name", (req, res) => {
    
    userModel
        .findOne({ username: req.params.name })
        .then(userFound => {
            console.log("------")
            console.log(userFound._id)
            console.log("------")

            res.redirect(`/user/${userFound._id}`)
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