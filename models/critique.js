// FOR BONUS ONLY

const mongoose = require("mongoose")

let critiqueSchema = new mongoose.Schema(

    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }, // ID
        title:String,
        text: String, // Limiter le nombre de charactères
        concert: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "concert"
        },
        temporal: Date
    }
)

let critiqueModel = mongoose.model("critique", critiqueSchema)

module.exports = critiqueModel;