const express = require("express")
const router = new express.Router();




router.get("/:id", (req, res) => {

    res.render("concerts/concert_info")

})



module.exports = router