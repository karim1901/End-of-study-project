const express = require('express')
const {  get_products_last, best_products } = require('../controllers/productController')


const router = express.Router()

router.get('/lastProducts',get_products_last)

router.get('/best/products',best_products)


module.exports = router