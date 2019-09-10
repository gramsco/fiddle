const mongoose = require("mongoose")

let artistSchema = new mongoose.Schema(

    {
        name: String,
        genre: Array,
        persons: Array, // d'objectID
        number_persons: Number,
        foundation_year: Number,
        fav_musicians: Array,
        instruments: Array
    }
)

let artistModel = mongoose.model("artist", artistSchema)

module.exports = artistModel;
