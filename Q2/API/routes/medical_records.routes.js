var express = require('express');
var router = express.Router();


router.use('/', require('./../controllers/medical_records.controller').get)


module.exports = router
