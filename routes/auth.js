const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const fileUploader = require("../cloudinary");

//SIGNUP

router.get("/signup", (req, res) => {
  res.render("auth/listener_chosen", { noNav: true });
});

router.post("/signup", fileUploader.single("profile_image"), (req, res) => {
  userModel.findOne({ username: req.body.username }).then(userRes => {
    console.log("query went fine");
    console.log(userRes);
    if (userRes) {
      console.log("already exists");
      res.render("auth/login", {
        msg: "Sorry, this amazing username is already taken :("
      });
    } else {
      if (req.file) profile_image = req.file.secure_url;
      else profile_image = "/Orange.jpg";
      const { username, password, email } = req.body;
      userModel
        .create({ profile_image, username, password, email })
        .then(() => {
          console.log("user created!");
          res.redirect("/");
        })
        .catch(err => console.log(err));
    }
  });
});

//CONNECT

router.get("/login", (req, res) => {
  res.render("auth/login", { noNav: true });
});

router.post("/login", (req, res) => {
  console.log(req.session);

  if (!req.body.username || !req.body.password) {
    res.render("auth/login", { msg: "Informations incomplètes" });
  } else {
    userModel
      .findOne({ username: req.body.username })
      .then(userFound => {
        if (!userFound) {
          res.render("auth/login", {
            msg: "Sooooorry, wrong username and/or password!"
          });
        } else if (req.body.password == userFound.password) {
          req.session.currentUser = req.body;
          res.redirect("/");
        } else {
          res.render("auth/login", {
            msg: "Sooooorry, wrong username and/or password!"
          });
        }
      })
      .catch(err => console.log(err));
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
