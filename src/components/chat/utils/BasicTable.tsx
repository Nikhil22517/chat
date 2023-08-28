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
  data: any[];
  header: string[];
}

const BasicTable: React.FC<AllAlertTableProps> = (props: any) => {
  const { data, header } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {header.map((el: string) => (
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
        {data.map((obj: any) => {
          return (
            <TableRow key={obj._id}>
              {header.map((head: string) => (
                <TableCell key={head} sx={{ border: "1px solid grey" }}>
                  <Box sx={{ width: "10rem" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        cursor: "pointer",
                      }}
                    >
                      {obj[head]}
                    </Typography>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BasicTable;
