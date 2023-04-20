if (process.env.NODE_ENV !== 'production') {
  var baseUrl = "http://localhost:7071/api"
}else{
  var baseUrl = "https://coordinator.proudhill-a9115a2b.eastus.azurecontainerapps.io/api"
}

const fetch = require('node-fetch')
const express = require('express');
const router = express.Router();

// const TOKEN = process.env.REACT_APP_Shipping_data_api_key;

// This is a helper function to generate the headers with the x-functions-key attached
// const GET_DEFAULT_HEADERS = () => {
//   var headers = {
//     'x-functions-key': TOKEN,
//   }
//   return headers;
// };

const functionUrl = "/FormRecognizerResult"
const GET_FILE_ANALYZE_URL = (filename) => {
  return baseUrl + functionUrl + "?filename=" + filename;
}

const fetchResult = async (filename) => {
  const url = GET_FILE_ANALYZE_URL(filename)
  const shipping_data =
    await fetch(url, {
      method: "GET",
      // headers: GET_DEFAULT_HEADERS()
    })
      .then(res => res.json())
      // .then(cl => {
      //   console.log(cl);
      //   return cl;
      // });
  return shipping_data
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const filename = req.query.filename;
  const message = await fetchResult(filename);
  res.send(message);
});

module.exports = router;
