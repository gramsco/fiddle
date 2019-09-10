const musicianModel = require(".././models/musician")
const concertModel = require(".././models/concert")
const critiqueModel = require(".././models/critique")
const userModel = require(".././models/user");


const mongoose = require("mongoose")
require("dotenv").config()

let pass = process.env.DB_PASS
let pseudo = process.env.DB_USER

const uri = `mongodb+srv://${pseudo}:${pass}@cluster0-rcuew.gcp.mongodb.net/fiddle?retryWrites=true&w=majority`;


mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))


// let dataMusician = [

//     {
//         profile_image:"",
//         name:"Alexis Jarousky",
//         instruments: ["Clarinette"],
//         solist: true,
//         type: "solo artist"
//     },
//     {
//         profile_image: "",
//         name: "Jeanne",
//         instruments: ["Harpe", "Clavecin"],
//         solist: true,
//         type: "solo artist"
//     },
//     {
//         profile_image: "",
//         name: "Alphonse",
//         instruments: ["Saxophone"],
//         solist: true,
//         type: "solo artist"
//     },
//     {
//         profile_image: "",
//         name: "Orane",
//         instruments: ["Tambour", "Piano"],
//         solist: true,
//         type: "solo artist"
//     },
//     {
//         profile_image: "",
//         name: "Roger Talon",
//         instruments: ["Piano", "Violon"],
//         solist: true,
//         type: "solo artist"
//     },
//     {
//         profile_image: "",
//         name: "Margaux",
//         instruments: ["Voix", "Violoncelle"],
//         solist: true,
//         type: "solo artist"

//     },
//     {
//         profile_image: "",
//         name: "Pascal Gibert",
//         instruments: ["Clarinette", "Triangle"],
//         solist: true,
//         type: "solo artist"

//     },
//     {
//         profile_image: "",
//         name: "Rodrigue",
//         instruments: ["Tambour", "Guitar"],
//         solist: true,
//         type: "solo artist"

//     },
//     {
//         profile_image: "",
//         name: "The Fiddle",
//         instruments: ["Guitare électrique", "Drums"],
//         solist: false,
//         type: "band"

//     },
//     {
//         profile_image: "",
//         name: "Orchestre Philharmonique de Tokyo",
//         instruments: ["Eru", "Koto"],
//         solist: false,
//         type:"orchestra"

//     },
//     {
//         profile_image: "",
//         name: "The Cure",
//         instruments: ["Guitar", "Drums", "Bass"],
//         solist: false,
//         type: "band"

//     },
//     {
//         profile_image: "",
//         name: "The Brownie Sugar Orchestra",
//         instruments : ["Drums","Voice"],
//         solist: false,
//         type: "orchestra"

//     },
//     {
//         profile_image: "",
//         name: "Antonin",
//         instruments: ["Mandolin"],
//         solist: true,
//         type:"solo artist"
//     }

// ]

// let dataConcerts = [

//     {
//         nom: "",
//         date: "",
//         lieu: "L'Ephémère",
//         adresse: "228 avenue du Maine",
//         passe: true,
//         musician: "5d77b26371437725d78817b1"
//     },
//     {

//         nom: "",
//         date: "",
//         lieu: "Le Felicie",
//         adresse: "174 avenue du Maine",
//         passe: true,
//         musician: "5d77b26371437725d78817b2"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "La terrasse des Ternes",
//         adresse: "15 avenue des Ternes",
//         passe: true,
//         musician: "5d77b26371437725d78817b3"
//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Le bistrot Là-Haut",
//         adresse: "8 rue Pierre Ginié",
//         passe: true,
//         musician: "5d77b26371437725d78817b4"
//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Le café 55",
//         adresse: "55 avenue de la Grande Armée",
//         passe: true,
//         musician: "5d77b26371437725d78817b5"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "La Cayenne",
//         adresse: "25 rue de la Cayenne",
//         passe: true,
//         musician: "5d77b26371437725d78817b6"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Le Richelieu",
//         adresse: "33 route de la Reine",
//         passe: true,
//         musician: "5d77b26371437725d78817b7"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Bistrot Marie",
//         adresse: "31 rue d'Ulm",
//         passe: true,
//         musician: "5d77b26371437725d78817b8"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Le Corleone",
//         adresse: "34 avenue d'Italie",
//         passe: true,
//         musician: "5d77b26371437725d78817b9"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Les Gobelins",
//         adresse: "1 rue des Gobelins",
//         passe: true,
//         musician: "5d77b26371437725d78817ba"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Le Soufflot",
//         adresse: "31 rue Soufflot",
//         passe: true,
//         musician: "5d77b26371437725d78817bb"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "Orléans",
//         adresse: "24 avenue de Bourbon",
//         passe: true,
//         musician: "5d77b26371437725d78817bc"

//     },
//     {
//         nom: "",
//         date: "",
//         lieu: "La Koaniche",
//         adresse: "25 rue du Baigneur",
//         passe: true,
//         musician: "5d77b26371437725d78817bd"

//     }


// ]

// const dataCritiques =
//     [{
//         concert: "5d77b4f2ef49c82947f598e6",
//         user: "Blabla",
//         title:"Super concert",
//         text:"Lorem ipsum blablablabla content gnagnagna"
//     },
//     {
//         concert: "5d77b4f2ef49c82947f598e7",
//         user: "Thierry",
//         title:""
      
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598e8,
      
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598e9,
       
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598ea,
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598eb,
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598ec,
    
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598ed,
        
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598ee,
        
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598ef,
      
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598f0,
      
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598f1,
       
//     },
//     {
//         concert: 5d77b4f2ef49c82947f598f2,
        
//     }]



// const dataUser = {

//     profile_image: "",
//     username: "orane",
//     password: "orane",
//     email: "antoningauth@gmail.com",
//     fav_musicians: ["5d77b26371437725d78817b1","5d77b26371437725d78817bd"]

// }

// userModel
//     .create(dataUser)
//     .then(dbres => console.log(dbres))
//     .catch(err => console.log(err))


// concertModel
//     .insertMany(dataConcerts)
//     .then((dbres) => console.log(dbres))
//     .catch(err => console.log(err))

// musicianModel
//     .insertMany(dataMusician)
//     .then((dbres) => console.log(dbres))
//     .catch(err => console.log(err))

