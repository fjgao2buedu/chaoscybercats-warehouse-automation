import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_DEFAULT_HEADERS, GET_FormRecognizerResult } from "../globals";

// @ts-ignore
const SearchBar = ({parentCallback}) => {
  const [filename, setfilename] = useState<string>("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("react received query <filename>: ", filename);
      fetchRecord(filename);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [filename]);

  const fetchRecord = async (filename:string) => {
    // construct url to query class by semester
    var url = GET_FormRecognizerResult(filename)
    // fetch url with custom headers
    const chaos = await fetch(url, {
      method: "GET",
      // headers: GET_DEFAULT_HEADERS()
    })
      .then(res => res.json())
      .then(cl => {
        console.log("react fetched response: ",cl);
        parentCallback(cl);
      })
    return chaos
  }

  return (
    <Input
      // id="searchfilename"
      value={filename}
      placeholder={"enter filename"}
      onChange={(e) => setfilename(e.target.value)}
    />
  );
};

export default SearchBar;
