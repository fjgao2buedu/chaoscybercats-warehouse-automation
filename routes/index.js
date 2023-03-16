var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join('.','client','build2')));
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
