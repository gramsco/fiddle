const mongoose = require("mongoose")

let musicianSchema = new mongoose.Schema(

    {
        profile_image: String,
        name: String,
        instruments: Array,
        date_ajout:String,
        solist:Boolean,
        type: String
    }
)

let musicianModel = mongoose.model("musician", musicianSchema)

module.exports = musicianModel;