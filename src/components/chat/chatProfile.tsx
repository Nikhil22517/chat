import { Box, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import RangeFilter from "./utils/RangeFilter";
import WriteUpReport from "./daily_reports/WriteupReport";
import QualityReport from "./daily_reports/QualityReport";
import EOCReport from "./daily_reports/EocReport";
import EMentorReport from "./daily_reports/Ementor";
import DriverReport from "./daily_reports/DeliveryReport";
import DriverDeliveryReport from "./daily_reports/DriverDeliveryReport";
import CallOutReport from "./daily_reports/CallOut";
import RescueReport from "./daily_reports/Rescue";
import AllAlertReport from "./daily_reports/AllAlertReport";
const ChatProfile = () => {
  const [type, setType] = useState("daily");

  return (
    <>
      <Box
        sx={{
          padding: "0.5rem",
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 100,
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h6">Profile Name</Typography>

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
                borderRadius: 0,
                backgroundColor: type === "daily" ? "lightskyblue" : "",
              }}
              onClick={() => setType("daily")}
            >
              Daily
            </Button>
            <Button
              sx={{
                borderLeft: "1px solid grey",
                borderRadius: 0,
                backgroundColor: type === "weekly" ? "lightskyblue" : "",
              }}
              onClick={() => setType("weekly")}
            >
              Weekly
            </Button>
          </Stack>
        </Stack>

        {type === "daily" ? <RangeFilter /> : "hello"}
      </Box>

      <Box
        sx={{
          padding: "0.5rem",
        }}
      >
        {type === "daily" ? (
          <>
            <WriteUpReport />
            <QualityReport />
            <EOCReport />
            <EMentorReport />
            <DriverReport />
            <DriverDeliveryReport />
            <CallOutReport />
            <RescueReport />
            <AllAlertReport />
          </>
        ) : (
          "Weekly Reports"
        )}
      </Box>
    </>
  );
};

export default ChatProfile;
