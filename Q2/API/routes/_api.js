var express = require('express');
var router = express.Router();

router.use('/medical_records', require('./medical_records.routes'))


module.exports = router
