const {addTOCart, get_cart, deleteFormCart} = require("../controllers/CartController")

const express = require("express")

const router = express.Router()



router.post('/',addTOCart)

router.get('/:id',get_cart)

router.delete('/:id',deleteFormCart)

module.exports = router