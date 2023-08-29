import React, { useEffect, useState } from "react";
import moment from "moment";
import DailyReport from "./utils/DailyReport";
const filterReport = (data: any) => {
  const temp_data: any[] = [];

  data?.forEach((ele: any) => {
    let obj: any = {};
    obj["Date"] = moment(ele.date).utc().format("MMM DD, YYYY");

    for (let [key, value] of Object.entries(ele.metrics)) {
      if (key === "swc_pod") {
        obj["SWC-POD"] = value;
      } else if (key === "dcr") {
        obj["DCR"] = value;
      } else if (key === "dnr") {
        obj["DNR"] = value;
      } else {
        obj[key.replace(/\n/g, "")] = value;
      }
    }
    temp_data.push(obj);
  });

  const temp_header = [
    "Date",
    "packages_delivered",
    "routes_completed",
    "DCR",
    "SWC-POD",
    "DNR",
  ];
  return { temp_data, temp_header };
};

const Data = [
  {
    _id: "64e5b53cdf0e4ce0d915462b",
    company_id: "67",
    date: "2023-08-22T00:00:00.000Z",
    metrics: {
      date: "2023-08-20",
      name: "Abdurrahman Dragjoshi",
      transporter_id: "A10LCVBLGBEEIK",
      packages_delivered: "205",
      routes_completed: "1",
      dcr: "97.16%",
      swc_pod: "99.15%",
      dnr: "1",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-23T07:28:57.891Z",
    updated_at: "2023-08-23T07:28:57.891Z",
    transporter_id: "A10LCVBLGBEEIK",
  },
];

interface QualityReportProps {}

const QualityReport: React.FC<QualityReportProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState<any>([]);
  const [tableHeader, setTableHeader] = useState<string[]>([]);

  useEffect(() => {
    const { temp_data, temp_header } = filterReport(Data);
    setTableData(temp_data);
    setTableHeader(temp_header);
    setLoading(false);
  }, []);

  return (
    <>
      <DailyReport
        loading={loading}
        tableData={tableData}
        tableHeader={tableHeader}
        reportName="Quality Report"
      />
    </>
  );
};

export default QualityReport;
