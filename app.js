var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var biscuitRouter = require('./routes/biscuit');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var biscuit = require("./models/biscuit");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/biscuit', biscuitRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await biscuit.deleteMany();
let instance1 = new
biscuit({"Name": "saltBiscuit", "FlavourType": "salt", "Price": 50
});
let instance2 = new
biscuit({"Name": "cream", "FlavourType": "Cream", "Price": "30"
});
let instance3 = new
biscuit({"Name": "sweet", "FlavourType": "sweet", "Price": "29"
});
instance1.save().then( () => { console.log('First Object is created'); }).catch( (e) => { console.log('There was an error', e.message); });
instance2.save().then( () => { console.log('second Object is created'); }).catch( (e) => { console.log('There was an error', e.message); });
instance3.save().then( () => { console.log('third Object is created'); }).catch( (e) => { console.log('There was an error', e.message); });
}
let reseed = true;
if (reseed) { recreateDB();}

module.exports = app;
