const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()

require("dotenv").config()

app.use(express.static(path.join(__dirname, "public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "hbs")
hbs.registerPartials("views/partials")


app.listen()