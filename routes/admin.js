const express = require("express");
const router = new express.Router();
const concertModel = require("../models/concert.js");
const musicianModel = require("../models/musician");
const critiqueModel = require("../models/critique");
const userModel = require("../models/user");

router.get("/", (req, res) => {
  res.render("admin/index");
});
router.get("/users", (req, res) => {
  res.render("admin/users");
});

router.get("/musicians/", (req, res) => {
  musicianModel
    .find()
    .then(musRes => {
      res.render("admin/musicians", { musicians: musRes });
    })
    .catch(err => console.log(err))
});

router.get("/musicians/:id", (req, res) => {
  musicianModel
    .findById(req.params.id)
    .then(musRes => {
      console.log(musRes)
      res.render("admin/musician_edit", musRes);
    })
    .catch(err => console.log(err))
});

router.post("/musicians/edit", (req, res) => {
  console.log(req.body)

  const { name, profile_image, instruments, type } = req.body

  musicianModel
    .findByIdAndUpdate(req.body.id,
      {
        name,
        instruments,
        type
      })
    .then(() => {
      console.log(`${name} was updated`)
      res.redirect("/admin/musicians/")
    })
    .catch(err => console.log(err))



});

router.get("/concerts", (req, res) => {
  concertModel
    .find()
    .then(dbRes => {
      res.render("admin/concerts", { concert: dbRes });
    })
    .catch(err => console.log("ça ne marche pas"));
});

router.get("/concerts/:id", (req, res) => {
  concertModel
    .findById(req.params.id)
    .then(concert => {
      res.render("admin/concert_edit.hbs", concert)
    })
    .catch(err => console.log(err))
})

router.get("/concert/add", (req, res) => {

  musicianModel
    .find()
    .then(musicians => {
      console.log(musicians)
      res.render("admin/concert_add", { musicians })
    })
    .catch(err => console.log(err))
})

router.post("/concert/add", (req, res) => {

  var { nom, date, lieu, adresse, price, musician} = req.body
  if (nom == "") nom = `${musician} @ ${lieu}`

  concertModel
    .create({ nom, date, lieu, adresse, price, musician })
    .then((dbRes) => {
      console.log("new concert !" + dbRes)
      res.redirect("/admin/concerts")
    })
    .catch(err => console.log(err))

})

router.post("/concert/edit", (req, res) => {

  var { nom, adresse, lieu } = req.body
  concertModel
    .findByIdAndUpdate(req.body.id, { nom, adresse, lieu })
    .then((d) => {
      console.log(d)
      res.redirect("/admin/concerts")
    })
    .catch(err => console.log(err))
})



router.get("/critiques", (req, res) => {

  critiqueModel
    .find()
    .then((critics) => {
      critics.forEach((element,index) => {
        userModel
          .findOne(element.user)
          .then((userRes) => {
            element.username = userRes.username
            if (index == critics.length - 1) {
              setTimeout(() => {
                res.render("admin/critiques", { critics })
              }, 50);
            }
          })
      })
    })
    .catch(err => console.log(err))
});




module.exports = router;
