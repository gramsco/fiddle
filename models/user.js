const mongoose = require("mongoose")

let userSchema = new mongoose.Schema(
    
    {
        username: String,
        password: String,
        email:String,
        artist: String, // OBJECTID !!!!
        fav_musicians: Array,
        instruments: Array,
    }
)

let userModel = mongoose.model("users",userSchema)
