var express = require('express');
var router= express.Router();
const personalDetailController = require("../repositories/formDataRepo");

router.post('/users/:userid/preview', personalDetailController.postFormData );
router.get('/users/:userid/preview', personalDetailController.getPostData);



module.exports = router;