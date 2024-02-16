const express = require('express')
const router = express.Router();
const loginController = require('../repositories/loginRepo');


router.get('/login', loginController.getLoginData)
router.get('/logout', loginController.getLogout);

module.exports = router;
export {};