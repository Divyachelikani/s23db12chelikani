var express = require('express');
const biscuit_controlers= require('../controllers/biscuit');
var router = express.Router();

//A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET biscuit */
router.get('/', biscuit_controlers.biscuit_view_all_Page );
router.get('/detail',secured, biscuit_controlers.biscuit_view_one_Page);
module.exports = router;

/* GET create biscuit page */
router.get('/create',secured, biscuit_controlers.biscuit_create_Page);

/* GET update biscuit page */
router.get('/update', secured,biscuit_controlers.biscuit_update_Page);


/* GET delete biscuit page */
router.get('/delete',secured,biscuit_controlers.biscuit_delete_Page);

