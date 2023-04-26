/**
 * This file can be used to store global variables that you need to access across multiple places.
 * We've put a few here that we know you will need.
 * Fill in the blank for each one
 */

// export const MY_BU_ID = "U67453988";

// const BASE_API_URL = "https://chaoscybercats-warehouse-automation.azurewebsites.net/";
const URL_EXTENSION_SHIPPING_DATA_BY_SHIPPERID = "/shipping_data"
export const GET_SHIPPING_DATA = (shipperid: string) => {
  return URL_EXTENSION_SHIPPING_DATA_BY_SHIPPERID + "?shipperid=" + shipperid;
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


