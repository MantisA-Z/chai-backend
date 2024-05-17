const registerUser = require('../controllers/user.controller')
const router = require('express').Router()

router.route("/register").post(registerUser)

module.exports = router;