const mongoose = require("mongoose")

let concertSchema = new mongoose.Schema(

    {
        nom:String, // pas obligatoire
        date: Date,
        lieu: String, 
        adresse : String,
        musician: Array, // IDS !!!!!
        passe: Boolean,
 // IDS !!!   
    }
)

let artistModel = mongoose.model("artist", userSchema)
