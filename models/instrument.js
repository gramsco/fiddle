const mongoose = require("mongoose")

let instruSchema = new mongoose.Schema(

    {
        name: String
    }
)

let artistModel = mongoose.model("artist", userSchema)
