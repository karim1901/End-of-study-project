
const express  = require('express')
const { signUp, login, validyToken } = require('../controllers/authController')

const router = express.Router()


router.post('/signUp',signUp)


router.post('/login',login)



router.post("/verifyToken",validyToken)



module.exports = router