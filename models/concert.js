const mongoose = require("mongoose");

let concertSchema = new mongoose.Schema({
  nom: String, // pas obligatoire
  date: Date,
  lieu: String,
  adresse: String,
  city: String,
  passe: Boolean,
  musician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "musician"
  },
  time: Number,
  price: Number
});

let concertModel = mongoose.model("concert", concertSchema);

module.exports = concertModel;
