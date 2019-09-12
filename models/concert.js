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
  time: String,
  price: Number,
  year_concert: String,
  month_concert: String,
  day_concert: String,
  date_concert:Number
});

let concertModel = mongoose.model("concert", concertSchema);

module.exports = concertModel;
