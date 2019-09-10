// FOR BONUS ONLY

const mongoose = require("mongoose")

let critiqueSchema = new mongoose.Schema(

    {
        user: String, // ID
        title:String,
        text: String, // Limiter le nombre de charactères
        concert: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "concert"
        }
    }
)

let critiqueModel = mongoose.model("critique", critiqueSchema)

module.exports = critiqueModel;