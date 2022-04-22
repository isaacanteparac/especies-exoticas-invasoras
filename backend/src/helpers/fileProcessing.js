const multer = require('multer');
const path = require('path');


const files_ = {}

files_.diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../filesData'),
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + '-monkeywit-' + file.originalname)
    }
})

files_.fileUpload = multer({
    storage: files_.diskstorage
}).single('photo')

module.exports = files_;