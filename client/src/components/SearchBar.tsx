import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_DEFAULT_HEADERS, GET_SHIPPING_DATA } from "../globals";

// @ts-ignore
const SearchBar = ({parentCallback}) => {
  const [shipperId, setshipperId] = useState<string>("");
  const BarStyling = {
    fullWidth: true,
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("shipperId:", shipperId);
      fetchRecord(shipperId);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [shipperId]);

  const fetchRecord = async (shipperid:string) => {
    // construct url to query class by semester
    var url = GET_SHIPPING_DATA(shipperid)
    // fetch url with custom headers
    const chaos = await fetch(url, {
      method: "GET",
      headers: GET_DEFAULT_HEADERS()
    })
      .then(res => res.json())
      .then(cl => {
        console.log(cl);
        parentCallback(cl);
      })
    return chaos
  }

  return (
    <Input
      //   style={BarStyling}
      //   id="searchshipperid"
      value={shipperId}
      placeholder={"enter shipper id"}
      onChange={(e) => setshipperId(e.target.value)}
    />
  );
};

export default SearchBar;
