/**
 * This file can be used to store types and interfaces for data received from the API.
 * It's good practice to name your interfaces in the following format:
 * IMyInterfaceName - Where the character "I" is prepended to the name of your interface.
 * This helps remove confusion between classes and interfaces.
 */

/**
 * This represents a record as returned by the API
 */
export interface IShippingRecord {
  id: string
  date: string;
  warehouseid: string;
  shippingpo: string;
  shipmentid: string;
  boxesrcvd: string;
}

let sql = "SELECT c.id as id,c.Date as date,c.ShipmentID as shipmentid,c.ShipperID as shipperid,c.WarehouseID as warehouseid,c.BoxesRcvd as boxesrcvd,c.ShippingPO as shippingpo FROM c WHERE c.ShipperID = {shipperid}"
