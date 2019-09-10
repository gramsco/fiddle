const mongoose = require("mongoose")

let userSchema = new mongoose.Schema(

    {
        profile_image: String,
        username: String,
        password: String,
        email: String,
        concerts: Array,
        fav_musicians: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "musician"
        }]
    }
)

let userModel = mongoose.model("users", userSchema)

module.exports = userModel;