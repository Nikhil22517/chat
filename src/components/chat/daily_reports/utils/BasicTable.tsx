import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
} from "@mui/material";

interface AllAlertTableProps {
  data: any[];
  header: string[];
}

const BasicTable: React.FC<AllAlertTableProps> = (props: any) => {
  const { data, header } = props;

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
            {header.map((el: string) => (
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
          {data.map((obj: any) => {
            return (
              <TableRow key={obj._id}>
                {header.map((head: string) => (
                  <TableCell
                    key={head}
                    sx={{
                      borderLeft: "1px solid grey",
                      borderBottom: "1px solid grey",
                      "&:first-child": {
                        borderLeft: "none !important",
                      },
                    }}
                  >
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
    </TableContainer>
  );
};

export default BasicTable;
