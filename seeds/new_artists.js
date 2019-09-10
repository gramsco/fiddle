const artistModel = require(".././models/artist.js")
const mongoose = require("mongoose")
require("dotenv").config()

let pass = process.env.DB_PASS
let pseudo = process.env.DB_USER

const uri = `mongodb+srv://${pseudo}:${pass}@cluster0-rcuew.gcp.mongodb.net/fiddle?retryWrites=true&w=majority`;


let data = [
    {
        name: "Boris",
        genre: ["Rock", "Pop"],
        persons: [],
        number_persons:1,
        foundation_year: 2015,
        fav_musicians: [],
        instruments:["guitar","bass"]
    },
    {
        name: "Jeanne",
        genre: ["Classique"],
        persons: [],
        number_persons: 1,
        foundation_year: 2008,
        fav_musicians: [],
        instruments: ["harp","bassoon"]
    },
    {
        name: "Margonin",
        genre: ["Classique","K-POP"],
        persons: ["Margaux", "Antonin"],
        number_persons : 2,
        foundation_year: 2011,
        fav_musicians: [],
        instruments: ["guitar","bass","drums","keyboard"]
    }
   
]


mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))


artistModel
    .insertMany(data)
    .then((dbres) => console.log(dbres))
    .catch(err => console.log(err))