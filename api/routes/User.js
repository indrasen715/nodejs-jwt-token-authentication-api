const express = require('express')
const router = express.Router();
const userController = require('../controller/User')
const authMiddleware=require('../middleware/check-auth')
//User Authentication  Route
router.post('/signup', userController.userRegistration)
router.post('/login', userController.userLogin)
router.put('/delete', authMiddleware,userController.deleteUser)
router.post('/getUserByToken',authMiddleware,userController.getUserByToken)

module.exports = router;