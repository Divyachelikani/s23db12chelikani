var express = require('express');
const biscuit_controlers= require('../controllers/biscuit');
var router = express.Router();

// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }
  


/* GET costumes */
router.get('/',biscuit_controlers.biscuit_view_all_Page );
router.get('/detail', biscuit_controlers.biscuit_view_one_Page);
router.get('/create', biscuit_controlers.biscuit_create_Page);
router.get('/update', biscuit_controlers.biscuit_update_Page);
router.get('/delete', biscuit_controlers.biscuit_delete_Page);

//router.get('/update', biscuit_controlers.biscuit_update_Page);

/* GET update costume page */
router.get('/update', secured,biscuit_controlers.biscuit_update_Page);
router.get('/delete', secured,biscuit_controlers.biscuit_update_Page);
router.get('/create', secured,biscuit_controlers.biscuit_update_Page);

module.exports = router;




