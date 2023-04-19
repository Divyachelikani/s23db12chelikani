var express = require('express');
const biscuit_controlers= require('../controllers/biscuit');
var router = express.Router();

/* GET costumes */
router.get('/',biscuit_controlers.biscuit_view_all_Page );
router.get('/detail', biscuit_controlers.biscuit_view_one_Page);
router.get('/create', biscuit_controlers.biscuit_create_Page);
router.get('/update', biscuit_controlers.biscuit_update_Page);
router.get('/delete', biscuit_controlers.biscuit_delete_Page);


module.exports = router;




