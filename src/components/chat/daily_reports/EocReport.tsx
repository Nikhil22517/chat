import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import BasicTable from "../utils/BasicTable";

const filterReport = (filterData: any) => {
  const temp_data = filterData.map((el: any) => ({
    Date: moment(el.date).utc().format("MMM DD, YYYY"),
    Compliance: el.metrics.compliance.toString() + "%",
  }));
  const temp_header = ["Date", "Compliance"];

  return { temp_data, temp_header };
};

const Data = [
  {
    _id: "6464adada841dc292b78bc69",
    company_id: "67",
    date: "2023-03-07T00:00:00.000Z",
    transporter_id: "A10LCVBLGBEEIK",
    __v: 0,
    created_at: "2023-03-17T03:20:04.875Z",
    metrics: {
      transporter_id: "A10LCVBLGBEEIK",
      name: "Abdurrahman Dragjoshi",
      date: "2023-03-07T00:00:00.000Z",
      compliance: "100",
    },
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-17T10:33:31.740Z",
  },
  {
    _id: "6464adada841dc292b78bc9c",
    company_id: "67",
    date: "2023-03-12T00:00:00.000Z",
    transporter_id: "A10LCVBLGBEEIK",
    __v: 0,
    created_at: "2023-03-17T03:20:04.883Z",
    metrics: {
      transporter_id: "A10LCVBLGBEEIK",
      name: "Abdurrahman Dragjoshi",
      date: "2023-03-12T00:00:00.000Z",
      compliance: "100",
    },
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-17T10:33:31.740Z",
  },
  {
    _id: "6464adada841dc292b78bcad",
    company_id: "67",
    date: "2023-03-13T00:00:00.000Z",
    transporter_id: "A10LCVBLGBEEIK",
    __v: 0,
    created_at: "2023-03-17T03:20:04.889Z",
    metrics: {
      transporter_id: "A10LCVBLGBEEIK",
      name: "Abdurrahman Dragjoshi",
      date: "2023-03-13T00:00:00.000Z",
      compliance: "94.59",
    },
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-17T10:33:31.741Z",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "6464adf6b32f80a5f0b4f6d9",
    company_id: "67",
    date: "2023-05-09T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "76.67",
      date: "2023-05-09T00:00:00.000Z",
    },
    created_at: "2023-05-17T10:35:33.622Z",
    updated_at: "2023-05-19T02:26:31.792Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "6464adf6b32f80a5f0b4f6da",
    company_id: "67",
    date: "2023-05-11T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "100.0",
      date: "2023-05-11T00:00:00.000Z",
    },
    created_at: "2023-05-17T10:35:33.622Z",
    updated_at: "2023-05-19T02:26:31.828Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "6464adf6b32f80a5f0b4f6db",
    company_id: "67",
    date: "2023-05-14T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "88.68",
      date: "2023-05-14T00:00:00.000Z",
    },
    created_at: "2023-05-17T10:35:33.622Z",
    updated_at: "2023-05-19T02:26:31.835Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "6464adf6b32f80a5f0b4f6dc",
    company_id: "67",
    date: "2023-05-15T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "89.71",
      date: "2023-05-15T00:00:00.000Z",
    },
    created_at: "2023-05-17T10:35:33.622Z",
    updated_at: "2023-05-19T02:24:34.197Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "6466de57e53d4ff220686710",
    company_id: "67",
    date: "2023-05-08T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "72.0",
      date: "2023-05-08T00:00:00.000Z",
    },
    created_at: "2023-05-19T02:26:31.224Z",
    updated_at: "2023-05-19T02:26:31.224Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "646db1b5a31cb4488f13ab67",
    company_id: "67",
    date: "2023-04-23T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "92.06",
      date: "2023-04-23T00:00:00.000Z",
    },
    created_at: "2023-05-24T06:41:57.359Z",
    updated_at: "2023-05-24T14:39:08.630Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    msg_sent: false,
    msg_id: null,
    _id: "646db1b5a31cb4488f13ab68",
    company_id: "67",
    date: "2023-04-24T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "94.92",
      date: "2023-04-24T00:00:00.000Z",
    },
    created_at: "2023-05-24T06:41:57.359Z",
    updated_at: "2023-05-24T14:39:09.090Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64805744933636c670e73d23",
    company_id: "67",
    date: "2023-05-30T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "100.0",
      date: "2023-05-30T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-07T10:09:08.195Z",
    updated_at: "2023-06-07T10:09:08.195Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64805744933636c670e73d24",
    company_id: "67",
    date: "2023-06-01T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "100.0",
      date: "2023-06-01T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-07T10:09:08.195Z",
    updated_at: "2023-06-07T10:09:08.195Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64805744933636c670e73d25",
    company_id: "67",
    date: "2023-06-03T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "100.0",
      date: "2023-06-03T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-07T10:09:08.195Z",
    updated_at: "2023-06-07T10:09:08.195Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64805744933636c670e73d26",
    company_id: "67",
    date: "2023-06-04T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "100.0",
      date: "2023-06-04T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-07T10:09:08.195Z",
    updated_at: "2023-06-07T10:09:08.195Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64805744933636c670e73d27",
    company_id: "67",
    date: "2023-06-05T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "100.0",
      date: "2023-06-05T00:00:00.000Z",
    },
    msg_sent: true,
    msg_id: null,
    created_at: "2023-06-07T10:09:08.195Z",
    updated_at: "2023-06-07T10:09:08.195Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64997ff735bb4bafb79a84d5",
    company_id: "67",
    date: "2023-06-18T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "83.33",
      date: "2023-06-18T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T12:09:27.272Z",
    updated_at: "2023-06-26T17:39:52.553Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64997ff735bb4bafb79a84d6",
    company_id: "67",
    date: "2023-06-19T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "88.31",
      date: "2023-06-19T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T12:09:27.272Z",
    updated_at: "2023-06-26T17:39:53.369Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64997ff735bb4bafb79a84d7",
    company_id: "67",
    date: "2023-06-20T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "82.35",
      date: "2023-06-20T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T12:09:27.272Z",
    updated_at: "2023-06-26T17:39:54.039Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64997ff735bb4bafb79a84d8",
    company_id: "67",
    date: "2023-06-21T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "83.05",
      date: "2023-06-21T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T12:09:27.272Z",
    updated_at: "2023-06-26T17:39:54.903Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64997ff735bb4bafb79a84d9",
    company_id: "67",
    date: "2023-06-24T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "93.94",
      date: "2023-06-24T00:00:00.000Z",
    },
    msg_sent: true,
    msg_id: null,
    created_at: "2023-06-26T12:09:27.272Z",
    updated_at: "2023-06-26T17:39:55.578Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64cb753efc8298b7d57eaf4a",
    company_id: "67",
    date: "2023-07-16T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "75.0",
      date: "2023-07-16T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-03T09:37:02.341Z",
    updated_at: "2023-08-03T09:37:02.341Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64cb753efc8298b7d57eaf4b",
    company_id: "67",
    date: "2023-07-17T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "87.93",
      date: "2023-07-17T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-03T09:37:02.341Z",
    updated_at: "2023-08-03T09:37:02.341Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64cb753efc8298b7d57eaf4c",
    company_id: "67",
    date: "2023-07-18T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "77.42",
      date: "2023-07-18T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-03T09:37:02.341Z",
    updated_at: "2023-08-03T09:37:02.341Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "64cb753efc8298b7d57eaf4d",
    company_id: "67",
    date: "2023-07-22T00:00:00.000Z",
    metrics: {
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      compliance: "75.0",
      date: "2023-07-22T00:00:00.000Z",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-03T09:37:02.342Z",
    updated_at: "2023-08-03T09:37:02.342Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
];

interface EOCReportProps {}

const EOCReport: React.FC<EOCReportProps> = (props) => {
  const {} = props;
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableHeader, setTableHeader] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    const { temp_data, temp_header } = filterReport(Data);
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
        // minHeight: "30vh",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          EOC Report
        </Typography>
        {/* <DailyPreview
          data={tableData}
          header={tableHeader}
          dates={dates}
          tableWidth="80vh"
          reportName="EOC Report"
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
            <BasicTable data={tableData} header={tableHeader} />
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
              {" "}
              No Data Found
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default EOCReport;
