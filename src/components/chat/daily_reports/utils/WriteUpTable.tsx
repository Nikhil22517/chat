import React, { useLayoutEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useParams, useSearchParams } from "react-router-dom";
import moment from "moment";

interface TableDataProps {
  data?: any;
  title?: string;
  dates?: any;
  header?: any;
  hidePreview?: boolean;
  loading?: boolean;
}

const WriteupTable: React.FC<TableDataProps> = (props: any) => {
  const { data, title, dates, header, hidePreview, loading } = props;

  const params: any = useParams();
  const [headCells, setHeadCells] = useState<string[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [addDrawer, setAddDrawer] = useState(false);
  const [, setSearchParams] = useSearchParams();

  useLayoutEffect(() => {
    if (data && data.length !== 0) {
      setHeadCells(Object.keys(data[0]));
      setRows([...data]);
    }
  }, [data]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const OuterBoxStyle = {
    width: "100%",
    borderRadius: "0.6rem",
    p: "1rem",
    pt: "0.4rem",
    // pb: 0,
    mb: "1rem",
    "& .MuiTableCell-root": {
      padding: "0.2rem 0.6rem !important",
      textAlign: "left !important",
    },
    border: "1px solid grey",
  };

  const getLabel = (head: string, obj: any) => {
    if (head.toLowerCase() === "date") {
      return moment(obj[head]).format("MMM DD,YYYY");
    } else if (head.toLowerCase() === "status") {
      return obj[head]?.replace(/_/g, " ");
    }
    return obj[head];
  };

  const colorValue = (head: string, obj: any) => {
    let color;

    if (head === "Actions") {
      if (obj === "View") {
        color = "#2F7BCF";
      } else if (obj === "refused_to_sign") {
        color = "#7A0C2E";
      }
    } else if (head === "Status") {
      if (obj === "signed") {
        color = "green";
      } else if (obj === "sent") {
        color = "#2F7BCF";
      } else if (obj === "refused_to_sign") {
        color = "#FF4842";
      }
    }
    return color;
  };

  return (
    <Box sx={OuterBoxStyle}>
      <Box display="flex" justifyContent="space-between" padding="0.8rem 0">
        <Typography sx={{ flex: 1 }} variant="h6" id="tableTitle">
          {title}
        </Typography>
        {hidePreview && (
          <Button
            variant="contained"
            startIcon={<AddIcon sx={{ height: "1.2rem" }} />}
            onClick={() => setAddDrawer(true)}
            sx={{
              // top: "1rem",
              // right: "1rem",
              padding: "0.3rem 0.7rem",
              // color: theme.palette.background.paper,
              borderRadius: "0.2rem",
              // backgroundColor: theme.palette.primary.main,
              "&:hover": {
                //   backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Add Report
          </Button>
        )}
      </Box>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20rem",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Loading....
        </Box>
      ) : (
        <>
          {data.length === 0 ? (
            <Box
              sx={{
                height: "8rem",
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "grey",
              }}
            >
              No write-up reports
            </Box>
          ) : (
            <TableContainer
              sx={{
                border: `1px solid grey`,
                borderRadius: "0.8rem",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    {(header?.length > 0 ? header : headCells)?.map(
                      (el: any, index: number) => (
                        <TableCell
                          key={el}
                          sx={{
                            borderLeft: `1px solid grey`,
                            backgroundColor: "#E6F1F8",
                            "&.MuiTableCell-root": {
                              textAlign: "center !important",
                              paddingBlock: "1rem !important",
                            },
                            // "&:first-child": {
                            //   border: "0 !important",
                            // },
                          }}
                        >
                          {el}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(header?.length > 0 ? data : rows)?.map(
                    (obj: any, i: number) => {
                      return (
                        <TableRow key={obj._id}>
                          {(header?.length > 0 ? header : headCells).map(
                            (head: string, index: any) => {
                              return head === "Actions" ? (
                                <TableCell
                                  key={head}
                                  sx={{
                                    borderLeft: `1px solid grey`,
                                    "&.MuiTableCell-root": {
                                      textAlign: "center !important",
                                    },
                                  }}
                                >
                                  {obj[head]?.map((ele: any) => (
                                    <Button
                                      sx={{
                                        minWidth: 0,
                                        color: colorValue(head, ele),
                                        textDecoration: "underline",
                                      }}
                                      variant="text"
                                      onClick={() => {
                                        console.log("hello");
                                      }}
                                      key={ele}
                                    >
                                      {ele.replace(/_/g, " ")}
                                    </Button>
                                  ))}
                                </TableCell>
                              ) : (
                                <TableCell
                                  key={head}
                                  sx={{
                                    borderLeft: `1px solid grey`,
                                    color: colorValue(head, obj[head]),
                                    "&.MuiTableCell-root": {
                                      textAlign: "center !important",
                                    },
                                    // "&:first-child": {
                                    //   borderLeft: "0 !important",
                                    // },
                                  }}
                                >
                                  {getLabel(head, obj)}
                                </TableCell>
                              );
                            }
                          )}
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </Box>
  );
};

export default WriteupTable;
