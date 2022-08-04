const multer = require('multer');
//----------------------------------->

//multer configurations------------------------------>
const imageStorage = multer.diskStorage({
    destination: 'public/img',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

//--------------------------------------------------->
exports.imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error('Please upload an Image'))
        }
        cb(undefined, true)
    }
})

//Route handler-------------------------------------->
exports.addSingleImage = async (req, res) => {
    try {
        res.send("success");
        console.log("image uploaded succesfulyy");
    } catch (err) {
        console.log(err);
    }
}