import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface AllAlertTableProps {
  data: any;
  header: string[];
  headerLabel: string[];
}

const EmentorTable: React.FC<AllAlertTableProps> = (props: any) => {
  const { data, header, headerLabel } = props;

  console.log(data);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headerLabel.map((el: string) => (
            <TableCell
              key={el}
              sx={{
                backgroundColor: "#DEF2FF",
                border: "1px solid grey",
                "&:first-child": {
                  borderTopLeftRadius: "0.5rem !important",
                },
                "&:last-child": {
                  borderTopRightRadius: "0.5rem !important",
                },
              }}
            >
              {el}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {header.map((head: string) => (
          <TableRow key={head}>
            <TableCell key={head} sx={{ border: "1px solid grey" }}>
              {head}
            </TableCell>
            <TableCell key={head} sx={{ border: "1px solid grey" }}>
              {data[head]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmentorTable;
