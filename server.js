const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()
const artistModel = require("./models/artist.js")
const mongoose = require("mongoose")

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//PATHS
let auth = require("./routes/auth.js");
let musician = require("./routes/musician.js");
let user = require("./routes/user.js");

let pass = process.env.DB_PASS
let pseudo = process.env.DB_USER

const uri = `mongodb+srv://${pseudo}:${pass}@cluster0-rcuew.gcp.mongodb.net/fiddle?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("connected to DataBase"))
    .catch(err => console.log(err))

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.render("user/index", { test: "coucou" });
});

app.use("/auth", auth);
app.use("/musician", musician);
app.use("/user", user);
=======
    artistModel
        .find()
        .then((dbres) => {

            res.render("user/index", { artists:dbres })

        })
    
})

app.use("/auth", auth)
app.use("/musician", musician)
app.use("/user", user)


>>>>>>> e14a85f2cbfb992f8d2dcb66e1614c86ce910de1

app.listen(3000, () =>
  console.log("le serveur marche ici : http://localhost:3000")
);
