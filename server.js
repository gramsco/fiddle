const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//PATHS
let auth = require("./routes/auth.js");
let musician = require("./routes/musician.js");
let user = require("./routes/user.js");
let admin = require("./routes/admin.js");
let concert = require("./routes/concert.js")
let critic = require("./routes/critic.js")

let pass = process.env.DB_PASS;
let pseudo = process.env.DB_USER;

const uri = `mongodb+srv://${pseudo}:${pass}@cluster0-rcuew.gcp.mongodb.net/fiddle?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("connected to DataBase"))
  .catch(err => console.log(err));



const musicianModel = require("./models/musician.js");
const critiqueModel = require("./models/critique");
const concertModel = require("./models/concert.js");
const userModel = require("./models/user");

app.get("/", (req, res) => {
  musicianModel
    .find()
    .then(artists => {
      critiqueModel
        .find()
        .then(critiques => {
          console.log(critiques)
          console.log(`y'a ${critiques.length} critiques`)
          concertModel
            .find()
            .then(concerts => {
              console.log(`y'a ${concerts.length} concerts`)
              console.log("pfiouh all went fine, man.")
              res.render("user/index", { artists,critiques,concerts });
            })
        })
    })
})
      
    

app.use("/auth", auth);
app.use("/musician", musician);
app.use("/user", user);
app.use("/admin", admin);
app.use("/concert", concert);
app.use("/musician",musician)
app.use("/critic",critic)


app.listen(process.env.PORT, () =>
  console.log("le serveur marche ici : http://localhost:3000")
);
