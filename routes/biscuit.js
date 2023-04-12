var express = require('express');
const biscuit_controlers= require('../controllers/biscuit');
var router = express.Router();

/* GET costumes */
router.get('/',biscuit_controlers.biscuit_view_all_Page );
module.exports = router;




