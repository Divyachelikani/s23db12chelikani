var biscuit = require('../models/biscuit');
// List of all Costumes
// List of all Costumes
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
    
// for a specific Costume.
exports.biscuit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: biscuit detail: ' + req.params.id);
};
// Handle Costume create on POST.
// Handle Costume create on POST.
exports.biscuit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new biscuit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
// Handle Costume delete form on DELETE.
exports.biscuit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: biscuit delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.biscuit_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await biscuit.findById( req.params.id)
 // Do updates of properties
 if(req.body.Name)
 toUpdate.Name = req.body.Name;
 if(req.body.FlavourType) toUpdate.FlavourType = req.body.FlavourType;
 if(req.body.Price) toUpdate.Price = req.body.Price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
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

// for a specific Costume.
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