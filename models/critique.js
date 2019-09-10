// FOR BONUS ONLY

const mongoose = require("mongoose")

let critiqueSchema = new mongoose.Schema(

    {
        concert: String //ID !!!
    }
)

let artistModel = mongoose.model("artist", userSchema)
