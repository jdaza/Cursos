var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//La siguiente linea fue agregada para referenciar mongodb
var MongoClient = require('mongodb').MongoClient;

//Reconoce los archivos dentro de la carpeta routes.
var index = require('./routes/index');
var users = require('./routes/users');
var doctor = require('./routes/doctor');

var app = express();

var mongo;
MongoClient.connect('mongodb://localhost:27017/Lab',function (err, db) {
  if(err) 
    {
      console.log(err);
          throw err;
    }
  mongo = db;
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Agregado, mandamos la conexion de mongo db en el request, para evitar pasarla siempre.
app.use(function(req, res, next){
  req.mongo = mongo;
  next();
});

app.use('/', index);
app.use('/users', users);
//Agregando la carpeta doctor, es la direccino que va a escuchar.
app.use('/doctor', doctor);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
