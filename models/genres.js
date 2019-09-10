const mongoose = require("mongoose")

let genreSchema = new mongoose.Schema(

    {
        name:String
    }
)

let artistModel = mongoose.model("artist", userSchema)
