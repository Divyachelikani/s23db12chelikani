var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var biscuit_controller = require('../controllers/biscuit');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/biscuit', biscuit_controller.biscuit_create_post);
// DELETE request to delete Costume.
router.delete('/biscuit/:id', biscuit_controller.biscuit_delete);
// PUT request to update Costume.
router.put('/biscuit/:id', biscuit_controller.biscuit_update_put);
// GET request for one Costume.
router.get('/biscuit/:id', biscuit_controller.biscuit_detail);
// GET request for list of all Costume items.
router.get('/biscuit', biscuit_controller.biscuit_list);
module.exports = router;
