require('dotenv').config();
// require('node-fetch:fetch');
const fetch = require('node-fetch')
// Get Cosmos Client
var { CosmosClient } = require("@azure/cosmos");
var express = require('express');
var router = express.Router();

const config = require('../config')
const url = require('url')

const databaseId = config.database.id
const containerId = config.container.id

async function queryContainer(shipperID) {
  const client = new CosmosClient(process.env.AZURE_COSMOS_CONNECTIONSTRING);
  const querySpec = {
    query: // query items with shipperID
      "SELECT * FROM c WHERE c.ShipperID = @shipperID",
    parameters: [
      {
        name: "@shipperID",
        value: shipperID
      }
    ]
  };
  const container = client.database(databaseId).container(containerId);
  const { resources: results } = await container.items.query(querySpec).fetchAll();
  const items = []
  for (var queryResult of results) {
    let resultString = JSON.stringify(queryResult);
    items.push(resultString);
    // console.log(`\tQuery returned ${resultString}\n`)
  }
  shipping_data=items.map(r=>JSON.parse(r)).map((r)=>({
    Date: r.Date,
    WarehouseID: r.WarehouseID,
    ShippingPO: r.ShippingPO,
    ShipmentID: r.ShipmentID,
    BoxesRcvd: r.BoxesRcvd
  }))
  console.log(shipping_data);
  client.dispose()
  return {"Received":shipping_data}
}

const BASE_API_URL = "https://chaoscybercats-warehouse-automation-function.azurewebsites.net/api";
const URL_EXTENSION_SHIPPING_DATA_BY_SHIPPERID = "/shipping_data"
const GET_SHIPPING_DATA = (shipperid) => {
  return BASE_API_URL + URL_EXTENSION_SHIPPING_DATA_BY_SHIPPERID + "?shipperid=" + shipperid;
}
// You can get this from Piazza
const TOKEN = process.env.REACT_APP_Shipping_data_api_key||"vAeF39zvULVjTaB8sBxTxJRzZ3LQGl2QeVDBtikEHnEMAzFuQEC94w==";
// This is a helper function to generate the headers with the x-functions-key attached
const GET_DEFAULT_HEADERS = () => {
  var headers = {
    'x-functions-key':TOKEN,
  }
  // var headers = new Headers();
  // // You will need to add another header here
  // // If you do not, the API will reject your request (:
  // // headers.append('accept', 'application/json')
  // headers.append('x-functions-key', TOKEN)
  return headers;
};

const fetchRecord = async (shipperid) => {
  var url = GET_SHIPPING_DATA(shipperid)
  const shipping_data = 
  // '6'
  await fetch(url, {
    method: "GET",
    headers: GET_DEFAULT_HEADERS()
  })
    .then(res => res.json())
    .then(cl => {
      console.log(cl);
      // setRecords(cl);
      return cl;
    })
  return shipping_data
}

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const shipperid = req.query.shipperid;
  const message = await fetchRecord(shipperid);
  res.send(message);
});

module.exports = router;
