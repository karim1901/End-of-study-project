const express = require('express')
const { get_orders_Employee, get_orders_marchent } = require('../controllers/orderController')


const router = express.Router()

router.get('/:id/:status',get_orders_Employee)

router.get('/orderMerchent/:id/customer',get_orders_marchent)


module.exports = router