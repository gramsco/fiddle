const express = require("express")
const router = new express.Router();

// LES DEUX ROUTES VONT ETRE FUSIONNEES, 
// IL S'AGIT SEULEMENT D'UN EXEMPLE !!!

router.get("/musician", (req, res) => {

    res.render("user/profile",

        {
            username: "Robert",
            fav_musicians: [
                { name: "The Doors" },
                { name: "The White Stripes" },
                { name: "Dalida" },
                {
                    name: "A super band",
                    _id: "01234"
                }
            ],
            instruments: [
                {
                    instrument: "guitar",
                    years: "5 years"
                },
                {
                    instrument: "piano",
                    years: "2 years"
                }
            ]

        }

    )

})

//VOIR COMMENTAIRE PLUS HAUT
router.get("/fan", (req, res) => {

    res.render("user/profile",
        {
            username: "Roger",
            fav_musicians: [
                { name: "The Doors" },
                { name: "The White Stripes" },
                { name: "Dalida" },
                {
                    name: "A super band",
                    _id: "01234"
                }
            ]
        })
});





    module.exports = router