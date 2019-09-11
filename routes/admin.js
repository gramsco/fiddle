const express = require("express");
const router = new express.Router();
const concertModel = require("../models/concert.js");

router.get("/", (req, res) => {
  res.render("admin/index");
});
router.get("/users", (req, res) => {
  res.render("admin/users");
});
router.get("/musicians", (req, res) => {
  res.render("admin/musicians");
});

router.get("/concerts", (req, res) => {
  concertModel
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("admin/concerts", { concert: dbRes });
    })
    .catch(err => console.log("ça ne marche pas"));
});

router.get("/critiques", (req, res) => {
  res.render("admin/critiques");
});

module.exports = router;
