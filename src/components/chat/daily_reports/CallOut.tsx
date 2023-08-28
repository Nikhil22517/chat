import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import BasicTable from "../utils/BasicTable";
const Data = [
  {
    metrics: {
      name: "Abdurrahman  Dragjoshi",
      callout_time: "Call Out - Same Day",
      excused: "No",
      reason: null,
    },
    _id: "643fbec02e58914f720fd3fd",
    company_id: "67",
    date: "2023-04-19T00:00:00.000Z",
    driver_id: 4745,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-04-19T10:13:20.639Z",
    updated_at: "2023-04-19T10:13:20.639Z",
    __v: 0,
  },
  {
    metrics: {
      name: "Abdurrahman  Dragjoshi",
      callout_time: "Call Out - Same Day",
      excused: "No",
      reason: null,
    },
    _id: "64773759e7fcfeb82ff691ae",
    company_id: "67",
    date: "2023-05-31T00:00:00.000Z",
    driver_id: 4745,
    msg_sent: true,
    msg_id: "649ee2e1faceacd36aa313fe",
    created_at: "2023-05-31T12:02:33.346Z",
    updated_at: "2023-05-31T12:02:33.346Z",
    __v: 0,
  },
  {
    metrics: {
      name: "Abdurrahman  Dragjoshi",
      callout_time: "Paid Time Off",
      excused: "Yes",
      reason: null,
    },
    _id: "64943249116b9322d87e922f",
    company_id: "67",
    date: "2023-06-22T00:00:00.000Z",
    driver_id: 4745,
    msg_sent: true,
    msg_id: "64ba11aa55870f16a69adef8",
    created_at: "2023-06-22T11:36:41.921Z",
    updated_at: "2023-06-22T11:36:41.921Z",
    __v: 0,
  },
  {
    metrics: {
      name: "Abdurrahman  Dragjoshi",
      callout_time: "Paid Time Off",
      excused: "No",
      reason: null,
    },
    _id: "64a50996ff2e4459847615c2",
    company_id: "67",
    date: "2023-07-05T00:00:00.000Z",
    driver_id: 4745,
    msg_sent: true,
    msg_id: "64c7614cb989d5888d0bfacc",
    created_at: "2023-07-05T06:11:34.150Z",
    updated_at: "2023-07-05T06:11:34.150Z",
    __v: 0,
  },
  {
    metrics: {
      name: "Abdurrahman  Dragjoshi",
      callout_time: "No Call / No Show",
      excused: "No",
      reason:
        "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test ",
    },
    _id: "64abbd5bfc4241938ddd697b",
    company_id: "67",
    date: "2023-07-10T00:00:00.000Z",
    driver_id: 4745,
    msg_sent: true,
    msg_id: "64ca0d71366337a41539d4ba",
    created_at: "2023-07-10T08:12:11.955Z",
    updated_at: "2023-07-10T08:12:11.955Z",
    __v: 0,
  },
];

const filterReport = (filterData: any) => {
  const temp_data: any = [];

  filterData.forEach((ele: any) => {
    const obj: any = {};
    obj["_id"] = ele._id;
    obj["Date"] = moment(ele.date).utc().format("MMM DD, YYYY");
    obj["driver_Id"] = ele.driver_id;
    obj["Callout Type"] = ele.callout_time;
    obj["Excused"] = ele.excused;
    obj["Reason"] = ele.reason;
    obj["name"] = ele.name;

    temp_data.push(obj);
  });
  const temp_header = ["Date", "Callout Type", "Excused", "Reason"];
  return { temp_data, temp_header };
};

interface CallOutReportProps {}

const CallOutReport: React.FC<CallOutReportProps> = (props) => {
  const {} = props;
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableHeader, setTableHeader] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);

    const res_data: any = Data.map((ele: any) => {
      return {
        ...ele.metrics,
        _id: ele._id,
        date: ele.date,
        driver_id: ele.driver_id,
      };
    });

    const { temp_data, temp_header } = filterReport(res_data);
    setTableData(temp_data);
    setTableHeader(temp_header);
    setLoading(false);
  }, []);

  return (
    <Box
      sx={{
        // width: "100%",
        padding: "1rem",
        border: `1px solid grey`,
        borderRadius: "0.4rem",
        height: "40vh",
        marginBottom: "1rem",
        overflow: "auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Callouts
        </Typography>
        {/* <PreviewCallout
            data={tableData}
            header={tableHeader}
            tableWidth="100vh"
            dates={dates}
          /> */}
      </Stack>
      {loading ? (
        <Box
          sx={{
            noDataBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
              fontSize: "1rem",
              fontWeight: "bold",
            },
          }}
        >
          Loading...
        </Box>
      ) : (
        <>
          {tableData.length > 0 ? (
            <Box height="87%">
              <BasicTable data={tableData} header={tableHeader} />
            </Box>
          ) : (
            <Box
              sx={{
                noDataBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80%",
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
              }}
            >
              {" "}
              No Data Found
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default CallOutReport;
