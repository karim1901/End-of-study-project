const express = require('express')
const { add_order, get_orders, numberOrders, update_status, get_orders_by_customer } = require('../controllers/orderController')

const router = express.Router()


router.post('/',add_order)


router.get('/:id/:status',get_orders)


router.get("/:id",numberOrders)


router.get("/orderCustomer/:id/items",get_orders_by_customer)



router.put("/:id",update_status)



module.exports = router