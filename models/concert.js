const mongoose = require("mongoose")

let concertSchema = new mongoose.Schema(

    {
        date: Date,
        salle: String, //ID !!!
        musician: Array, // IDS !!!!!
        critique:Array // IDS !!!   
    }
)

let artistModel = mongoose.model("artist", userSchema)
