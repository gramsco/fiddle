const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//PATHS
let auth = require("./routes/auth.js");
let musician = require("./routes/musician.js");
let user = require("./routes/user.js");

app.get("/", (req, res) => {
  res.render("user/index", { test: "coucou" });
});

app.use("/auth", auth);
app.use("/musician", musician);
app.use("/user", user);

app.listen(3000, () =>
  console.log("le serveur marche ici : http://localhost:3000")
);
