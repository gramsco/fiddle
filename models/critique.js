// FOR BONUS ONLY

const mongoose = require("mongoose")

let critiqueSchema = new mongoose.Schema(

    {
        concert: String, //ID !!!
        user: String, // ID
        text: String // Limiter le nombre de charactères
    }
)

let critiqueModel = mongoose.model("critique", critiqueSchema)

module.exports = critiqueModel;