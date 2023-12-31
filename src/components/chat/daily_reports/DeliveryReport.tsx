import React, { useEffect, useState } from "react";
import DailyReport from "./utils/DailyReport";
const filterReport = (filterData: any) => {
  let obj: any = {
    "Sign/Signal Violations": 0,
    "Driver Distraction": 0,
    "Following Distance": 0,
    "Speeding Violations": 0,
    "Seatbelt Compliance": 0,
  };
  filterData.forEach((ele: any) => {
    obj["Sign/Signal Violations"] += ~~ele.metrics["sign_violations"];
    obj["Sign/Signal Violations"] += ~~ele.metrics["traffic_light_violation"];
    obj["Sign/Signal Violations"] += ~~ele.metrics["u_turn"];
    obj["Driver Distraction"] += ~~ele.metrics["driver_distraction"];
    obj["Following Distance"] += ~~ele.metrics["following_distance"];
    obj["Speeding Violations"] += ~~ele.metrics["speeding_violations"];
    obj["Seatbelt Compliance"] += ~~ele.metrics["seatbelt_compliance"];
  });

  const temp_data = { ...obj };
  const temp_header = Object.keys(temp_data);
  return { temp_data, temp_header };
};

const Data = [
  {
    msg_sent: false,
    msg_id: null,
    _id: "646469f8583a1f3d7963d440",
    company_id: "67",
    date: "2023-05-17T00:00:00.000Z",
    metrics: {
      week: "-2023-W20",
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      delivered_packages: "219",
      "packages_delivered_not_received_(dnr)": "0",
      dnr_dpmo: "0",
      dispatched_packages: "219",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: "0",
    },
    created_at: "2023-05-17T05:45:28.891Z",
    updated_at: "2023-05-17T05:45:28.891Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "649438352e941a5b0c92d826",
    company_id: "67",
    date: "2023-06-21T00:00:00.000Z",
    metrics: {
      week: "-2023-W25",
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      delivered_packages: "210",
      "packages_delivered_not_received_(dnr)": "0",
      dnr_dpmo: "0",
      dispatched_packages: "210",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: "0",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-22T12:01:57.423Z",
    updated_at: "2023-06-22T12:01:57.423Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
  {
    _id: "649947ff2e941a5b0c92d8b8",
    company_id: "67",
    date: "2023-06-25T00:00:00.000Z",
    metrics: {
      week: "-2023-W25",
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      delivered_packages: "210",
      "packages_delivered_not_received_(dnr)": "0",
      dnr_dpmo: "0",
      dispatched_packages: "210",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: "0",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T08:10:39.350Z",
    updated_at: "2023-06-26T08:10:39.350Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
];

interface DriverReportProps {}

const DriverReport: React.FC<DriverReportProps> = (props) => {
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
      reportName="Netradyne- Driver’s Report"
      headerLabel={headerLabel}
    />
  );
};

export default DriverReport;
