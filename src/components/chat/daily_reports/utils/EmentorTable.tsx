import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";

interface AllAlertTableProps {
  data: any;
  header: string[];
  headerLabel: string[];
}

const EmentorTable: React.FC<AllAlertTableProps> = (props: any) => {
  const { data, header, headerLabel } = props;

  return (
    <TableContainer
      sx={{
        border: `1px solid grey`,
        borderRadius: "0.8rem",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {headerLabel.map((el: string) => (
              <TableCell
                key={el}
                sx={{
                  backgroundColor: "#DEF2FF",
                  borderLeft: "1px solid grey",
                  borderBottom: "1px solid grey",
                  "&:first-child": {
                    borderLeft: "none !important",
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
              <TableCell
                key={head}
                sx={{
                  borderBottom: "1px solid grey",
                  borderRight: "1px solid grey",
                }}
              >
                {head}
              </TableCell>
              <TableCell key={head} sx={{ borderBottom: "1px solid grey" }}>
                {data[head]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmentorTable;
