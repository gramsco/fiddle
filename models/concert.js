const mongoose = require("mongoose")

let concertSchema = new mongoose.Schema(

    {
        nom:String, // pas obligatoire
        date: Date,
        lieu: String, 
        adresse : String,
        passe: Boolean,
        musician: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "musician"
        }
    }
)

let concertModel = mongoose.model("concert", concertSchema)

module.exports = concertModel;
