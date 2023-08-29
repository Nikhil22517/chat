import React, { useContext, useEffect, useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Box, Theme, Typography, Stack } from "@mui/material";
import EmentorTable from "./utils/EmentorTable";
import DailyReport from "./utils/DailyReport";
const filterReport = (filterData: any) => {
  let obj: any = {};
  obj["fico_count"] = 1;
  obj["idle_count"] = 1;
  filterData.forEach((ele: any) => {
    for (const key in ele.metrics) {
      if (key.trim() !== "driver_id")
        if (obj.hasOwnProperty(key)) {
          obj[key] += ~~ele.metrics[key]?.replace(/%/g, "");
          if (key.trim() === "fico") {
            obj["fico_count"]++;
          } else if (key.trim() === "idling") {
            obj["idle_count"]++;
          }
        } else {
          obj[key] = ~~ele.metrics[key]?.replace(/%/g, "");
        }
    }
  });

  obj["fico"] = (~~(obj["fico"] / obj["fico_count"])).toFixed();
  obj["idling"] = `${(obj["idling"] / obj["idle_count"]).toFixed()}%`;
  delete obj["fico_count"];
  delete obj["idle_count"];
  delete obj["station"];
  delete obj["driver_id"];
  delete obj["name"];
  delete obj["time"];
  const temp_data = { ...obj };
  const temp_header = Object.keys(temp_data);

  return { temp_data, temp_header };
};

const Data = [
  {
    _id: "646594a3a841dc292b6378ad",
    company_id: "67",
    date: "2023-01-22T00:00:00.000Z",
    metrics: {
      name: "Darnell Guerra",
      station: "DYY6",
      trips: "1",
      geotab_trips: "1",
      miles: "61",
      time: "11:45",
      fico: "826",
      accel: "0",
      braking: "0",
      cornering: "0",
      speeding: "0",
      distraction: "0",
      seatbelt: "0",
      back_up: "0",
      sse: "1",
      mpg: "12",
      idling: "14%",
      engine_off: "30",
      pre_dvcr: "0",
      post_dvcr: "0",
      training_assigned: "14",
      training_completed: "0",
      driver_id: null,
    },
    __v: 0,
    created_at: "2023-05-18T02:58:49.773Z",
    driver_id: 4745,
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-18T02:58:49.773Z",
  },
  {
    _id: "646594a3a841dc292b637965",
    company_id: "67",
    date: "2023-01-21T00:00:00.000Z",
    metrics: {
      name: "Darnell Guerra",
      station: "DYY6",
      trips: "1",
      geotab_trips: "1",
      miles: "61",
      time: "11:45",
      fico: "826",
      accel: "0",
      braking: "0",
      cornering: "0",
      speeding: "0",
      distraction: "0",
      seatbelt: "0",
      back_up: "0",
      sse: "1",
      mpg: "12",
      idling: "14%",
      engine_off: "30",
      pre_dvcr: "0",
      post_dvcr: "0",
      training_assigned: "14",
      training_completed: "0",
      driver_id: null,
    },
    __v: 0,
    created_at: "2023-05-18T02:58:49.778Z",
    driver_id: 4745,
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-18T02:58:49.778Z",
  },
  {
    _id: "646594a4a841dc292b637a16",
    company_id: "67",
    date: "2023-01-23T00:00:00.000Z",
    metrics: {
      name: "Darnell Guerra",
      station: "DYY6",
      trips: "1",
      geotab_trips: "1",
      miles: "61",
      time: "11:45",
      fico: "826",
      accel: "0",
      braking: "0",
      cornering: "0",
      speeding: "0",
      distraction: "0",
      seatbelt: "0",
      back_up: "0",
      sse: "1",
      mpg: "12",
      idling: "14%",
      engine_off: "30",
      pre_dvcr: "0",
      post_dvcr: "0",
      training_assigned: "14",
      training_completed: "0",
      driver_id: null,
    },
    __v: 0,
    created_at: "2023-05-18T02:58:49.780Z",
    driver_id: 4745,
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-18T02:58:49.780Z",
  },
  {
    _id: "646594a4a841dc292b637a5f",
    company_id: "67",
    date: "2023-02-01T00:00:00.000Z",
    metrics: {
      name: "Kaysean Taylor",
      station: "DYY6",
      trips: "1",
      geotab_trips: "1",
      miles: "5",
      time: "06:36",
      fico: "826",
      accel: "0",
      braking: "2",
      cornering: "1",
      speeding: "0",
      distraction: "0",
      seatbelt: "0",
      back_up: "0",
      sse: "0",
      mpg: "5",
      idling: "4%",
      engine_off: "29",
      pre_dvcr: "0",
      post_dvcr: "0",
      training_assigned: "19",
      training_completed: "4",
      driver_id: null,
    },
    __v: 0,
    created_at: "2023-05-18T02:58:49.781Z",
    driver_id: 4745,
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-18T02:58:49.781Z",
  },
  {
    _id: "646594a4a841dc292b637a76",
    company_id: "67",
    date: "2023-02-01T00:00:00.000Z",
    metrics: {
      name: "Darnell Guerra",
      station: "DYY6",
      trips: "1",
      geotab_trips: "1",
      miles: "46",
      time: "10:14",
      fico: "850",
      accel: "0",
      braking: "0",
      cornering: "0",
      speeding: "0",
      distraction: "0",
      seatbelt: "0",
      back_up: "0",
      sse: "0",
      mpg: "11",
      idling: "5%",
      engine_off: "27",
      pre_dvcr: "0",
      post_dvcr: "0",
      training_assigned: "20",
      training_completed: "1",
      driver_id: null,
    },
    __v: 0,
    created_at: "2023-05-18T02:58:49.781Z",
    driver_id: 4745,
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-18T02:58:49.781Z",
  },
];

interface EMentorReportProps {}

const EMentorReport: React.FC<EMentorReportProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState({});
  const [tableHeader, setTableHeader] = useState<string[]>([]);
  const headerLabel = ["Metrics", "Count"];
  useEffect(() => {
    setLoading(true);

    const { temp_data, temp_header } = filterReport(Data);
    setTableData(temp_data);
    setTableHeader(temp_header);
    setLoading(false);
  }, []);

  return (
    <DailyReport
      loading={loading}
      tableData={tableData}
      tableHeader={tableHeader}
      reportName=" E-Mentor"
      headerLabel={headerLabel}
    />
  );
};

export default EMentorReport;
