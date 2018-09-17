var dotenv = require('dotenv').config();
var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var knex = require('knex');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var medicationsRouter = require('./routes/medications');
// var serviceanimalsRouter = require('./routes/serviceanimals');
var servicetypesRouter = require('./routes/servicetypes');
var devicesRouter = require('./routes/devices');
// var users_medicationsRouter = require('./routes/users_medications');
// var serviceanimals_servicetypesRouter = require('./routes/serviceanimals_servicetypes');





var cors = require('cors');
var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/medications', medicationsRouter);
// app.use('/users/:userid/medications', users_medicationsRouter);
app.use('/servicetypes', servicetypesRouter);
app.use('/devices', devicesRouter);
// app.use('/users/:userid/serviceanimals', serviceanimalsRouter);
// app.use('/serviceanimals/:serviceanimalid/servicetypes', serviceanimals_servicetypesRouter);
//app.use('/alerts', alertsRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
