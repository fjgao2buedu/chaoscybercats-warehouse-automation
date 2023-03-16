var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var stuff = {
        "Received": [
            {
                "Date": "Mar 11, 2022",
                "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
                "ShippingPO": "3f7b2654-052d-4a4e-905f-87f22a3877a9",
                "ShipmentID": "3",
                "BoxesRcvd": "5",
                "ShipperID": "tako0",
            },
            {
                "Date": "Mar 10, 2022",
                "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
                "ShippingPO": "71b720e3-2847-45de-bbe7-8fa099d64632",
                "ShipmentID": "2",
                "BoxesRcvd": "2",
                "ShipperID": "tako0",
            },
            {
                "Date": "Mar 9, 2022",
                "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
                "ShippingPO": "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
                "ShipmentID": "1",
                "BoxesRcvd": "12",
                "ShipperID": "tako0",
            }
        ]
    }
    var items = stuff.Received
    
    res.send(items);
});

module.exports = router;
