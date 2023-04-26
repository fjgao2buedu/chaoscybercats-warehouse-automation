/**
 * This file can be used to store global variables that you need to access across multiple places.
 * We've put a few here that we know you will need.
 * Fill in the blank for each one
 */

// export const MY_BU_ID = "U67453988";
// https://coordinator.proudhill-a9115a2b.eastus.azurecontainerapps.io/api/FormRecognizerResult?filename=8091774821434587-ProductSampleData.pdf
// const BASE_API_URL = "https://coordinator.proudhill-a9115a2b.eastus.azurecontainerapps.io/api/";
// const URL_EXTENSION_FormRecognizerResult_by_filename = "/FormRecognizerResult"
export const GET_FormRecognizerResult = (filename: string) => {
  return "/analyzeresult" + "?filename=" + filename;
}

// You can get this from Piazza
export const TOKEN = process.env.REACT_APP_Shipping_data_api_key||"";

// This is a helper function to generate the headers with the x-functions-key attached
export const GET_DEFAULT_HEADERS = () => {
  var headers = new Headers();
  // You will need to add another header here
  // If you do not, the API will reject your request (:
  // headers.append('accept', 'application/json')
  headers.append('x-functions-key', TOKEN)
  return headers;
};


