import { DataGrid } from "@mui/x-data-grid";
import { IShippingRecord, } from "../types/api_types";

/**
 * component where you should write the code for displaying the
 * the table of records.
 *
 * You might need to change the signature of this function.
 *
 */
export const RecordTable = (props: { data: IShippingRecord[] }) => {
  /*
  https://mui.com/material-ui/react-table/
   */
  const tableColumn = [
    {
      headerName: "Date",
      field: "date",
      flex: 1.5,
    },
    {
      headerName: "Warehouse ID",
      field: "warehouseid",
      flex: 2,
    },
    {
      headerName: "Shipping PO",
      field: "shippingpo",
      flex: 2,
    },
    {
      headerName: "Shipment ID",
      field: "shipmentid",
      flex: 2,
    },
    {
      headerName: "# Boxes Received",
      field: "boxesrcvd",
      flex: 3,
    },
  ];

  return <DataGrid
    aria-label="Shipping Information"
    getRowId={row => row.id}
    rows={props.data}
    columns={tableColumn}
    pagination />
};

// /**
//  * You might find it useful to have some dummy data for your own testing.
//  * Feel free to write this function if you find that feature desirable.
//  * 
//  * When you come to office hours for help, we will ask you if you have written
//  * this function and tested your project using it.
//  */
// export function dummyData(): Promise<IGradeTableEntry[]> {
//   const data = [
//     {
//       studentId: "NotAnID",
//       studentName: "NaN",
//       classId: "-1",
//       className: "404",
//       semester: "christmas",
//       finalGrade: 1000,
//     },
//     {
//       studentId: "6",
//       studentName: "6",
//       classId: "6",
//       className: "6",
//       semester: "6",
//       finalGrade: 6666,
//     },
//     {
//       studentId: "?",
//       studentName: "???",
//       classId: "!",
//       className: "@",
//       semester: "&&&",
//       finalGrade: 0,
//     },
//   ];
//   return new Promise(function (resolve, reject) { resolve(data); });
// }

// export function dummyStudent(data: IUniversityStudent[]): { studentId: string; studentName: string; classId: string; className: string; semester: string; finalGrade: number; }[] {
//   return data.map(({ studentId }) => ({
//     studentId: studentId,
//     studentName: "gg",
//     classId: "404",
//     className: "404",
//     semester: "nope",
//     finalGrade: 0,
//   }))
// }

