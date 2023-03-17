var express = require('express');
var router = express.Router();
const TOKEN = process.env.REACT_APP_Shipping_data_api_key;
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
            "process.env.REACT_APP_Shipping_data_api_key": TOKEN
        },
        {
            "config.REACT_APP_SECRET": "nothing"
        },
        {
            "config.REACT_APP_Shipping_data_api_key": "nothing"
        }
    ]
    var items = stuff

    res.send(TOKEN);
});

module.exports = router;
