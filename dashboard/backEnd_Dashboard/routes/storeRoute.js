const express = require('express')
const { getStore, getStores, updateStore } = require('../controllers/storeController')


const router = express.Router()



const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images'); // Save files in the 'images' directory
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        req.body[file.fieldname] = uniqueName; // Save file name in req.body[fieldname]
        cb(null, uniqueName); // Save file with the unique name
    }
});


const upload = multer({ storage: storage });


router.get("/",getStores)

router.get("/:id",getStore)





router.put('/:id', upload.fields([
    { name: 'background', maxCount: 1 },
    { name: 'profile', maxCount: 1 }
]), (req, res, next) => {
    // Add URLs to req.body
    if (req.body.background) {
        req.body.background = `http://localhost:8001/${req.body.background}`;
    }
    if (req.body.profile) {
        req.body.profile = `http://localhost:8001/${req.body.profile}`;
    }
    next();
}, updateStore)




module.exports = router












