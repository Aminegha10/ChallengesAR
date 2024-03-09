const router = require('express').Router()
const {register , login} = require('../controllers/usersControler')
const authenticated = require('../middlewares/authenticate')


router.post("/register",register)
//.post("/login",login)

router.post("/login",authenticated,login)


module.exports = router