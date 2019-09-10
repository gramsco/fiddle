const express = require("express");
const router = new express.Router();

//SIGNUP

router.get("/signup", (req, res) => {
  res.render("auth/signup_choice");
});

router.get("/musician", (req, res) => {
  res.render("auth/musician_chosen");
});

router.get("/listener", (req, res) => {
  res.render("auth/listener_chosen");
});

router.get("/signup/2", (req, res) => {
  res.render("auth/signup_chosen");
});

router.get("/signup/3", (req, res) => {
  res.render("auth/signup_final");
});

//CONNECT

router.get("/login", (req, res) => {
  res.render("auth/login");
});

module.exports = router;
