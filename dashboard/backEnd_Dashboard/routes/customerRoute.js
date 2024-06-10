const express = require('express')
const { get_customer } = require('../controllers/customerController')

const router  = express.Router()




router.get('/:id',get_customer)








module.exports = router