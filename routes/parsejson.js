var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var stuff = [
        {
            "APPLICATION_SECRET": process.env.APPLICATION_SECRET
        },
        {
            "process.env.REACT_APP_SECRET": process.env.REACT_APP_SECRET
        },
        {
            "process.env.REACT_APP_Shipping_data_api_key": process.env.REACT_APP_Shipping_data_api_key
        },
        {
            "config.REACT_APP_SECRET": "nothing"
        },
        {
            "config.REACT_APP_Shipping_data_api_key": "nothing"
        }
    ]
    var items = stuff

    res.send(items);
});

module.exports = router;
