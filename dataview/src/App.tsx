import React, { useEffect, useState } from "react";
import { Grid, Input, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { GET_DEFAULT_HEADERS, GET_FormRecognizerResult } from "./globals";
import SearchBar from "./components/SearchBar";
import ReactJson from 'react-json-view'

function App() {
  const [records, setRecords] = useState<any[]>([]);
  // const [filename, setfilename] = useState<string>("");

  // const SearchBarr = () => {
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       console.log("0filename:", filename);
  //       // fetchRecord(filename)
  //     }, 1000);
  //     return () => clearTimeout(timeout);
  //   }, [filename]);
  //   const fetchRecord = async (filename:string) => {
  //     var url = GET_FormRecognizerResult(filename)
  //     const chaos = await fetch(url, {
  //       method: "GET",
  //       headers: GET_DEFAULT_HEADERS()
  //     })
  //       .then(res => res.json())
  //       .then(cl => {
  //         console.log(cl);
  //         setRecords(cl);
  //       })
  //     return chaos
  //   }
  //   return (
  //     <Input
  //       value={filename}
  //       placeholder={"enter shipper id"}
  //       onChange={(e) => setfilename(e.target.value)}
  //     />
  //   );
  // };

  const callback = (records: any[]) => {
    console.log("update data view: ", records)
    setRecords(records);
    // do something with value in parent component, like save to state
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid xs={12} container alignItems="center" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Spark Assessment
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h4" gutterBottom>Search
            {/* {process.env.APPLICATION_SECRET}
          {process.env.REACT_APP_SECRET}
          {process.env.REACT_APP_Shipping_data_api_key} */}
          </Typography>
          <div style={{ width: "100%" }}>
            <SearchBar parentCallback={callback}></SearchBar>
            {/* <Select fullWidth={true}
              label="Class"
              onChange={itemSelected}
              defaultValue={''}
              displayEmpty={true}
              renderValue={(val) => { return (val === '') ? selectMessage : dropdownClassList.find(({ value: klassID }) => klassID === val)?.label }}>
              {
                dropdownClassList.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>))
              }
            </Select> */}
          </div>
          <div style={{ width: "100%" }}>
            <a href="/">view shipping data</a>
          </div>
          <div style={{ width: "100%" }}>
            <a href="/dataentry">upload file</a>
          </div>
          <div style={{ width: "100%" }}>
            <a href="/dataview">view processed file data</a>
          </div>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Shipping Records
          </Typography>
          <div style={{ height: 600, width: '100%' }}>
            <ReactJson src={records} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
