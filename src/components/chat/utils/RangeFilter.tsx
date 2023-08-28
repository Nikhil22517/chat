import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import {
  LocalizationProvider,
  StaticDatePicker,
  StaticDateRangePicker,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterMoment";
import moment from "moment";

const RangeFilter = () => {
  const [filterType, setFilterType] = useState<string>("last_30_days");
  const [date, setDate] = useState<any>([null, null]);
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchor);
  const [anchor1, setAnchor1] = useState<HTMLButtonElement | null>(null);
  const open1 = Boolean(anchor1);

  const handleClose = (_e: any, Reason: string) => {
    if (Reason === "backdropClick") setAnchor(null);
    setAnchor(null);
  };
  const handleClose1 = (_e: any, Reason: string) => {
    if (Reason === "backdropClick") setAnchor1(null);
    setAnchor1(null);
  };

  useEffect(() => {
    switch (filterType) {
      case "this_week":
        setDate([
          new Date(
            new Date().setDate(new Date().getDate() - new Date().getDay())
          ),
          new Date(),
        ]);
        break;
      case "last_week":
        setDate([
          new Date(
            new Date().setDate(new Date().getDate() - new Date().getDay() - 7)
          ),
          new Date(
            new Date().setDate(new Date().getDate() - new Date().getDay() - 1)
          ),
        ]);
        break;
      case "last_30_days":
        setDate([
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() - 30
          ),
          new Date(),
        ]);
        break;
      default:
        break;
    }
  }, [filterType]);
  return (
    <>
      <Box
        sx={{
          paddingTop: "0.8rem",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            border: "1px solid grey",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <Button
            sx={{
              fontSize: "0.7rem",
              backgroundColor: filterType === "daily" ? "#DEF2FF" : "",
              borderRadius: 0,
              color: "black",
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setAnchor(event.currentTarget);
            }}
          >
            Daily
          </Button>
          <Button
            sx={{
              fontSize: "0.7rem",
              backgroundColor: filterType === "this_week" ? "#DEF2FF" : "",
              borderLeft: "1px solid grey",
              borderRadius: 0,
              color: "black",
            }}
            onClick={() => setFilterType("this_week")}
          >
            This Week
          </Button>
          <Button
            sx={{
              fontSize: "0.7rem",
              backgroundColor: filterType === "last_week" ? "#DEF2FF" : "",
              borderLeft: "1px solid grey",
              borderRadius: 0,
              color: "black",
            }}
            onClick={() => setFilterType("last_week")}
          >
            Last Week
          </Button>
          <Button
            sx={{
              fontSize: "0.7rem",
              backgroundColor: filterType === "last_30_days" ? "#DEF2FF" : "",
              borderLeft: "1px solid grey",
              borderRadius: 0,
              color: "black",
            }}
            onClick={() => setFilterType("last_30_days")}
          >
            Last 30 days
          </Button>
          <Button
            sx={{
              fontSize: "0.7rem",
              backgroundColor: filterType === "custom" ? "#DEF2FF" : "",
              borderLeft: "1px solid grey",
              borderRadius: 0,
              color: "black",
            }}
            onClick={() => setFilterType("custom")}
          >
            Custom
          </Button>
        </Stack>

        <Popover
          open={open}
          anchorEl={anchor}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              disableFuture={true}
              displayStaticWrapperAs="desktop"
              value={date ? date : new Date()}
              onChange={(newValue: any) => {
                if (newValue) {
                  setDate([newValue, null]);
                  setFilterType("daily");
                  setAnchor(null);
                }
              }}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Popover>
      </Box>

      <Box
        sx={{
          paddingTop: "0.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            backgroundColor: "#DEF2FF",
            padding: "0.2rem",
            borderRadius: "0.2rem",
          }}
        >
          Jul 29, 2023 - Aug 28, 2023
        </Typography>
      </Box>
    </>
  );
};

export default RangeFilter;
