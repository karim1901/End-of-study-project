const express = require('express')
const { add_product, get_products, update_product, bestProduct } = require('../controllers/productController')

const router = express.Router()

const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images') // specify the destination directory
    },
    filename: function (req, file, cb) {
        req.body.thumbnail = `${Date.now()}${file.originalname}`
        cb(null,req.body.thumbnail ) // specify the filename
        req.body.thumbnail = "http://localhost:8001/"+req.body.thumbnail
    }
});

const upload = multer({ storage: storage });







router.post('/',upload.single('thumbnail'),add_product)

router.put('/:id',upload.single('thumbnail'),update_product)


router.get('/:id',get_products)

router.get('/best/:id',bestProduct)







module.exports = router