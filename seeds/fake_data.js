const musicianModel = require(".././models/musician");
const concertModel = require(".././models/concert");
const critiqueModel = require(".././models/critique");
const userModel = require(".././models/user");

const mongoose = require("mongoose");
require("dotenv").config();

let pass = process.env.DB_PASS;
let pseudo = process.env.DB_USER;

const uri = `mongodb+srv://${pseudo}:${pass}@cluster0-rcuew.gcp.mongodb.net/fiddle?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

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

const dataCritiques = [
  {
    concert: "5d77b4f2ef49c82947f598e6",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Super concert",
    text: "Lorem ipsum blablablabla content gnagnagna"
  },
  {
    concert: "5d77b4f2ef49c82947f598e7",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Une vraie déception",
    text: "C'était moins bien que ce que je pensais"

  },
  {
    concert: "5d77b4f2ef49c82947f598e8",
    user: "5d77b9d62ae66f2c11c49399",
    title: "WAH ! Quelle surprise !",
    text: "J'ai voyagé. Vraiment."

  },
  {
    concert: "5d77b4f2ef49c82947f598e9",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Merveille des merveilles",
    text: "C'était mieux et encore mieux que mieux"

  },
  {
    concert: "5d77b4f2ef49c82947f598ea",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Bof",
    text: "L'improvisation atonale de huit heures était un peu boring"
  },
  {
    concert: "5d77b4f2ef49c82947f598eb",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Pas mal du tout",
    text: "Vraiment un super concert. Et super chips."
  },
  {
    concert: "5d77b4f2ef49c82947f598ec",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Low-Rem Hip-Sum",
    text: "Eh ouais, carrément, même."

  },
  {
    concert: "5d77b4f2ef49c82947f598ed",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Ô Grands dieux !",
    text: "C'était tip-top !!!"

  },
  {
    concert: "5d77b4f2ef49c82947f598ee",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Vachement chouette",
    text: "Mais aussi chouettement vache"

  },
  {
    concert: "5d77b4f2ef49c82947f598ef",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Veramente incredibile",
    text: "E la prima volta che vedo un concerto cosi' bello"

  },
  {
    concert: "5d77b4f2ef49c82947f598f0",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Je n'ai pas les mots",
    text: "... tellement ce concert était super !"

  },
  {
    concert: "5d77b4f2ef49c82947f598f1",
    user: "5d77b9d62ae66f2c11c49399",
    title: "Pas mal, vraiment pas mal",
    text: "Pas bien non plus, mais vraiment pas mal"

  },
  {
    concert: "5d77b4f2ef49c82947f598f2",
    user: "5d77b9d62ae66f2c11c49399",
    title: "INCROYABLE",
    text: "Le plus beau des plus beaux concerts"
  }
]

critiqueModel
  .create(dataCritiques)
  .then(dbres => console.log(dbres))
  .catch(err => console.log(err))

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
