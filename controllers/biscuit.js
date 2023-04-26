var biscuit = require('../models/biscuit');
// List of all biscuits
// List of all biscuits
exports.biscuit_list = async function(req, res) {
    try{
    thebiscuit = await biscuit.find();
    res.send(thebiscuit);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific biscuit.
exports.biscuit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: biscuit detail: ' + req.params.id);
};
// Handle biscuit create on POST.
// Handle biscuit create on POST.
exports.biscuit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new biscuit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"biscuit_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.FlavourType = req.body.FlavourType;
    document.Price = req.body.Price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle biscuit delete form on DELETE.
/*
exports.biscuit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: biscuit delete DELETE ' + req.params.id);
};*/
// Handle biscuit delete on DELETE.
exports.biscuit_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await biscuit.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
 }
};
// Handle biscuit update form on PUT.
exports.biscuit_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await biscuit.findById( req.params.id)
 // Do updates of properties
 console.log(toUpdate + "before update")
 if(req.body.Name)
 toUpdate.Name = req.body.Name;
 if(req.body.FlavourType) toUpdate.FlavourType = req.body.FlavourType;
 if(req.body.Price) toUpdate.Price = req.body.Price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 console.log(toUpdate + "after update")
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// VIEWS
// Handle a show all view
exports.biscuit_view_all_Page = async function(req, res) {
try{
thebiscuit = await biscuit.find();
res.render('biscuit', { title: 'biscuit Search Results', results: thebiscuit });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific biscuit.
exports.biscuit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await biscuit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

exports.biscuit_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await biscuit.findById( req.query.id)
    res.render('biscuitdetails',
   { title: 'biscuit Details', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a biscuit.
   // No body, no in path parameter, no query.
   // Does not need to be async
exports.biscuit_create_Page = function(req, res) {
        console.log("create view")
        try{
        res.render('biscuitcreate', { title: 'Biscuit Create'});
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
    };

    // Handle building the view for updating a biscuit.
    // query provides the id
exports.biscuit_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await biscuit.findById(req.query.id)
    res.render('biscuitupdate', { title: 'biscuit Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

   // Handle a delete one view with id from query
exports.biscuit_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
    result = await biscuit.findById(req.query.id)
    res.render('biscuitdelete', { title: 'biscuit Delete', toShow:
    result });
    }
    catch(err) {
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   