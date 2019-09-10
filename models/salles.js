const mongoose = require("mongoose")

let concertHallSchema = new mongoose.Schema(

    {
        name: String,
        type: String, // church, bar, concert hall, outside, park, festival, other
        city: String,
        street: String,
        address: String,
        
    }
)

let artistModel = mongoose.model("artist", userSchema)
