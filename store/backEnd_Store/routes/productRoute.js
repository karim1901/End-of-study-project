const express = require("express")
const { get_products, get_product, get_product_by_Category, get_products_home } = require("../controllers/productController")

const router = express.Router()


router.get('/',get_products)


router.get('/items/:id',get_product)

router.get('/category',get_product_by_Category)


router.get('/catalog/home',get_products_home)


module.exports = router
