const mongoose = require("mongoose")

let userSchema = new mongoose.Schema(
    
    {
        profile_image:String,
        username: String,
        password: String,
        email: String,
        fav_musicians: Array,
        concerts:Array
    }
)

let userModel = mongoose.model("users",userSchema)

module.exports = userModel;