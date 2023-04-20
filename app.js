const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.js');
const analyzeresultRouter = require('./routes/analyzeresult.js')
const dataentryRouter = require('./routes/dataentry.js')
const parsejsonRouter = require('./routes/parsejson.js')
const shippingdataRouter = require('./routes/shippingdata.js');

var app = express();
const port = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/analyzeresult', analyzeresultRouter);
app.use('/dataentry', dataentryRouter);
app.use('/parsejson', parsejsonRouter);
app.use('/shippingdata', shippingdataRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} .`);
});

