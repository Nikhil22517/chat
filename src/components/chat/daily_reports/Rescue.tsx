import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import BasicTable from "../utils/BasicTable";

const Data = [
  {
    metrics: {
      number_of_stops: null,
      caller_name: "Amrane Nait Abdesselam",
      rescuer_name: "Abdurrahman  Dragjoshi",
      status: "Refuse",
      number_of_packages: 88,
      reason: "reason",
    },
    _id: "643fa1e5f1b2b537a86458aa",
    company_id: "67",
    date: "2023-04-19T00:00:00.000Z",
    caller_id: 4749,
    rescuer_id: 4745,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-04-19T08:10:13.399Z",
    updated_at: "2023-04-19T08:10:13.399Z",
    __v: 0,
  },
  {
    metrics: {
      number_of_stops: null,
      caller_name: "Chad Elnahal",
      rescuer_name: "Abdurrahman  Dragjoshi",
      status: "Completed",
      number_of_packages: 34,
      reason: "",
    },
    _id: "64773b3ce7fcfeb82ff6a822",
    company_id: "67",
    date: "2023-05-31T00:00:00.000Z",
    caller_id: 4258,
    rescuer_id: 4745,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-05-31T12:19:08.127Z",
    updated_at: "2023-05-31T12:19:08.127Z",
    __v: 0,
  },
  {
    metrics: {
      number_of_stops: null,
      caller_name: "Adam Aziz",
      rescuer_name: "Abdurrahman  Dragjoshi",
      status: "Completed",
      number_of_packages: 10,
      reason: "",
    },
    _id: "648069663c57cc94f639625b",
    company_id: "67",
    date: "2023-06-07T00:00:00.000Z",
    caller_id: 4743,
    rescuer_id: 4745,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-07T11:26:30.916Z",
    updated_at: "2023-06-07T11:26:30.916Z",
    __v: 0,
  },
  {
    metrics: {
      number_of_stops: null,
      caller_name: "Abdurrahman  Dragjoshi",
      rescuer_name: "Abdurrahman  Dragjoshi",
      status: "Completed",
      number_of_packages: 10,
      reason: "",
    },
    _id: "64804f1606ccc1a3b4d5634e",
    company_id: "67",
    date: "2023-06-07T00:00:00.000Z",
    caller_id: 4745,
    rescuer_id: 4745,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-07T09:34:14.225Z",
    updated_at: "2023-06-07T09:34:14.225Z",
    __v: 0,
  },
  {
    metrics: {
      caller_name: "Abdurrahman  Dragjoshi",
      rescuer_name: "Aaron Hernandez",
      status: "Refuse",
      number_of_packages: 10,
      number_of_stops: 5,
      reason: "test",
    },
    _id: "64997f9bf3e90dd4611d3930",
    company_id: "67",
    date: "2023-06-26T00:00:00.000Z",
    caller_id: 4745,
    rescuer_id: 1251,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T12:07:55.093Z",
    updated_at: "2023-06-26T12:07:55.093Z",
    __v: 0,
  },
  {
    metrics: {
      caller_name: "Abdurrahman  Dragjoshi",
      rescuer_name: "Aaron Hernandez",
      status: "Completed",
      number_of_packages: 22,
      number_of_stops: 7,
      reason: "hi this is a new reason",
    },
    _id: "649a76041b3a227f0739a798",
    company_id: "67",
    date: "2023-06-27T00:00:00.000Z",
    caller_id: 4745,
    rescuer_id: 1251,
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-27T05:39:16.371Z",
    updated_at: "2023-06-27T05:39:16.371Z",
    __v: 0,
  },
];

const filterReport = (filterData: any) => {
  const temp_data: any = [];

  filterData.forEach((ele: any) => {
    let obj = {
      Date: moment(ele.date).utc().format("MMM DD,YYYY"),
      Rescuer: ele.rescuer_name,
      "Received Rescue": ele.caller_name,
      Status: ele.status,
      "No. of Stops": ele.number_of_stops,
      Reason: ele.reason,
    };

    temp_data.push(obj);
  });
  const temp_header = [
    "Date",
    "Rescuer",
    "Received Rescue",
    "Status",
    "No. of Stops",
    "Reason",
  ];
  return { temp_data, temp_header };
};

interface RescueReportProps {}

const RescueReport: React.FC<RescueReportProps> = (props) => {
  const {} = props;
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState<any[]>([]);
  const [tableHeader, setTableHeader] = useState<string[]>([]);

  useEffect(() => {
    const res_data: any = Data.map((ele: any) => {
      return {
        ...ele.metrics,
        _id: ele._id,
        date: ele.date,
        caller_id: ele.caller_id,
        rescuer_id: ele.rescuer_id,
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
        // minHeight: "30vh",
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
          Rescue
        </Typography>
        {/* <DailyPreview
          data={tableData}
          header={tableHeader}
          dates={dates}
          tableWidth="140vh"
          reportName="Rescue"
        /> */}
      </Stack>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Loading....
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80%",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              No Data Found
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default RescueReport;
