const express = require("express");
const router = new express.Router();
const concertModel = require("../models/concert.js");
const musicianModel = require("../models/musician");
const critiqueModel = require("../models/critique");
const userModel = require("../models/user");


const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]
const days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi"]


router.get("/", (req, res) => {
  musicianModel
    .count()
    .then(nMusicians => {
      concertModel
        .count()
        .then(nConcerts => {
          critiqueModel
            .count()
            .then(nCritiques => {
              userModel
                .count()
                .then(nUsers => {
                  res.render("admin/index", {nMusicians,nConcerts,nCritiques,nUsers});
              })
          })
      })
  })
  
});

router.get("/users", (req, res) => {
  userModel
    .find()
    .then(allUsers => {
      res.render("admin/users", { allUsers });
    })
    .catch(err => console.log(err))
});

router.get("/users/add", (req, res) => {
  musicianModel
    .find()
    .then(musicians => {
      res.render("admin/user_add",{musicians})
    })
    .catch(err => console.log(err))
})

router.post("/users/add", (req, res) => {
  
  const { username, email, fav_musicians, profile_image, password } = req.body
  
  userModel
    .create({
    username,
    email,
    fav_musicians,
    profile_image,
    password
    })
    .then(us => {
      
      console.log(`username ${us._id} created!`)
      res.redirect("/admin/users")
    })
    .catch(err => console.log(err))

})

router.get("/musicians/", (req, res) => {
  musicianModel
    .find()
    .then(musRes => {
      res.render("admin/musicians", {
        musicians: musRes,
        scripts:["musicians_admin.js"]
      });
    })
    .catch(err => console.log(err))
});

router.get("/musicians/add", (req, res) => {
  
  res.render("admin/musician_add")
   
})

router.delete("/musicians/delete/:id", (req,res) => {
  
  musicianModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("musician erased :( what a sad thing to do")
      res.send(200)
    })
  .catch(err => console.log(err))

})

router.post("/musicians/add", (req, res) => {

  console.log(req.body)
  const { name, profile_image, instruments, type } = req.body
  musicianModel
    .find({ name: req.body.name })
    .then(exists => {
      //checks if name appears to already exist in database
      if (exists.name) {
        res.render("admin/musician_add",{msg:"Already exists!"})
      }
      else {
        musicianModel.create({ name, profile_image, instruments, type })
        res.redirect("/admin/musicians")
      }
  })
  

})

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
      res.render("admin/concerts",
        {
          concert: dbRes,
          scripts:["concerts_admin.js"]
        });
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

  var { date, lieu, adresse, price, musician,time } = req.body
  date = new Date(date)
  const year_concert = date.getFullYear()
  const month_concert = months[date.getMonth()]
  const day_concert = days[date.getDay()]
  const date_concert = date.getDate()

  musicianModel
    .findById(musician)
    .then(musician => {
      nom = `${musician.name} @ ${lieu}`
      concertModel
        .create({ nom, date, date_concert, year_concert, month_concert, day_concert,lieu, adresse, price, musician, time})
        .then((dbRes) => {
          console.log("new concert !" + dbRes)
          res.redirect("/admin/concerts")
        })
        .catch(err => console.log(err))
    })

})

router.delete("/concert/delete/:id", (req, res) => {
  
  concertModel
    .findByIdAndDelete(req.params.id)
    .then((idFound) => {
      console.log(`youpi : concert ${idFound._id} and destroyed`)
      res.send(200)
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
    .then(critics => {
      if (critics.length == 0) {
        console.log("no critics")
        res.render("admin/critiques")
      }
      critics.forEach((element,index) => {
        userModel
          .findOne(element.user)
          .then((userRes) => {
            element.username = userRes.username
            if (index == critics.length - 1) {
              setTimeout(() => {
                res.render("admin/critiques",
                  {
                  critics,
                  scripts: ["critic_admin.js"]
                  }
                )
              }, 50);
            }
          })
      })
    })
    .catch(err => console.log(err))
});

router.delete("/critiques/:id", (req, res) => {
  critiqueModel
    .findByIdAndDelete(req.params.id)
    .then((works) => {
      res.send(200)
    })
    .catch(err => console.log(err))
  
  
    

})




module.exports = router;
