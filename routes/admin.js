const express = require("express");
const router = new express.Router();


router.get("/", (req,res) => {
    res.render("admin/index")
})
router.get("/users" , (req, res) => {
    res.render("admin/users")
})
router.get("/musicians", (req, res) => {
    res.render("admin/musicians")
})
router.get("/concerts", (req, res) => {
    res.render("admin/concerts")
})
router.get("/critiques", (req, res) => {
    res.render("admin/critiques")
})


module.exports = router;