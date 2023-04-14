// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var shippingdataRouter = require('./routes/shippingdata.js');
var parsejsonRouter = require('./routes/parsejson.js')
var dataentryRouter = require('./routes/dataentry.js')

// swagger
var swaggerUI = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

var app = express();
const port = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/shipping_data', shippingdataRouter);
app.use('/parsejson',parsejsonRouter);
app.use('/dataentry',dataentryRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} .`);
  });

module.exports = app;
