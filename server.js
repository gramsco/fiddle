const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const musicianModel = require("./models/musician.js");
const mongoose = require("mongoose");

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

let pass = process.env.DB_PASS;
let pseudo = process.env.DB_USER;

const uri = `mongodb+srv://${pseudo}:${pass}@cluster0-rcuew.gcp.mongodb.net/fiddle?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("connected to DataBase"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  musicianModel.find().then(dbres => {
    res.render("user/index", { artists: dbres });
  });
});

app.use("/auth", auth);
app.use("/musician", musician);
app.use("/user", user);
app.use("/admin", admin);
app.use("/concert", concert);
app.use("/musician",musician)


app.listen(3000, () =>
  console.log("le serveur marche ici : http://localhost:3000")
);
