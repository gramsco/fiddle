const cloudinary = require("cloudinary")
const multer = require("multer")
const cloudinaryStorage = require("multer-storage-cloudinary")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})


const storage = cloudinaryStorage({
    cloudinary,
    folder: "fiddl",
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        console.log("request =>", req);
        console.log("file =>", file);
        cb(null, file.originalname);
        // The file on cloudinary would have the same name as the original file name
    }
})

const fileUploader = multer({ storage })




module.exports = fileUploader;
// module.exports = middleware;