const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const session = require("express-session")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const MongoStore = require("connect-mongo")(session);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(
  session({
    secret: process.env.SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);


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


      
function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null;
  // access this value @ {{user}} or {{user.prop}} in .hbs
  console.log(res.locals.user)
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // access this value @ {{isLoggedIn}} in .hbs
  next(); // continue to the requested route
}

function checkPrivate(req, res, next) {
  
  if (!req.session.currentUser) {
    console.log("not connected??")
    res.redirect("/auth/login")
  }

  next()

}

app.use(checkloginStatus)
  
app.get("/", checkloginStatus, (req, res) => {
  musicianModel
    .find()
    .then(artists => {
      critiqueModel
        .find()
        .populate("concert")
        .then(critiques => {
          concertModel
          .find() 
          .then(concerts => {
              res.render("user/index", { artists, critiques, concerts });
            })
        })
    })
})

app.use("/auth", auth);
app.use("/musician", musician);
app.use("/user", user);
app.use("/admin", checkPrivate, admin);
app.use("/concert", concert);
app.use("/musician",musician)
app.use("/critic",critic)


app.listen(process.env.PORT, () =>
  console.log("le serveur marche ici : http://localhost:3000")
);
