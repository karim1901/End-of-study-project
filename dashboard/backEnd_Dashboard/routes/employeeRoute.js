const express = require('express')
const {add_employee, get_employees, update_employee, delete_employee, bestEmployee} = require('../controllers/employeeController')

const router = express.Router()



router.post('/',add_employee)

router.get('/:id',get_employees)
router.put('/:id',update_employee)
router.delete('/:id',delete_employee)


router.get('/:id/bestEmployee',bestEmployee)




module.exports = router