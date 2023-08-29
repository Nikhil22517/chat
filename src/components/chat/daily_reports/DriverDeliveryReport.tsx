import React, { useEffect, useState } from "react";
import moment from "moment";
import DailyReport from "./utils/DailyReport";
const Data = [
  {
    _id: "645a1f8b95875de134a33f79",
    company_id: "67",
    date: "2023-03-07T00:00:00.000Z",
    transporter_id: "AXQRA5VCE3V33",
    __v: 0,
    created_at: "2023-05-09T10:24:54.809Z",
    metrics: {
      transporter_id: "AXQRA5VCE3V33",
      name: "Madison Katherine Villanueva",
      delivered_packages: "0",
      "packages_delivered_not_received_(dnr)": "3",
      dnr_dpmo: "0",
      dispatched_packages: "0",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: "0",
    },
    msg_id: null,
    msg_sent: false,
    updated_at: "2023-05-09T10:24:54.809Z",
  },
  {
    _id: "647f0534933636c670e73ac1",
    company_id: "67",
    date: "2023-06-05T00:00:00.000Z",
    metrics: {
      name: "Madison Katherine Villanueva",
      transporter_id: "AXQRA5VCE3V33",
      delivered_packages: "0",
      "packages_delivered_not_received_(dnr)": "3",
      dnr_dpmo: 0,
      dispatched_packages: "0",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: 0,
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-06T10:06:44.545Z",
    updated_at: "2023-06-06T10:06:44.545Z",
    transporter_id: "AXQRA5VCE3V33",
  },
  {
    _id: "649438352e941a5b0c92d818",
    company_id: "67",
    date: "2023-06-21T00:00:00.000Z",
    metrics: {
      week: "-2023-W25",
      name: "Madison Katherine Villanueva",
      transporter_id: "AXQRA5VCE3V33",
      delivered_packages: "207",
      "packages_delivered_not_received_(dnr)": "0",
      dnr_dpmo: "0",
      dispatched_packages: "207",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: "0",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-22T12:01:57.419Z",
    updated_at: "2023-06-22T12:01:57.419Z",
    transporter_id: "AXQRA5VCE3V33",
  },
  {
    _id: "649947ff2e941a5b0c92d8aa",
    company_id: "67",
    date: "2023-06-25T00:00:00.000Z",
    metrics: {
      week: "-2023-W25",
      name: "Madison Katherine Villanueva",
      transporter_id: "AXQRA5VCE3V33",
      delivered_packages: "207",
      "packages_delivered_not_received_(dnr)": "0",
      dnr_dpmo: "0",
      dispatched_packages: "207",
      "packages_returned_to_station_(rts)": "0",
      "packages_returned_to_station_(rts)_%": "0%",
      return_to_station_dpmo: "0",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-06-26T08:10:39.349Z",
    updated_at: "2023-06-26T08:10:39.349Z",
    transporter_id: "AXQRA5VCE3V33",
  },
];

const filterReport = (filterData: any) => {
  const temp_data: any = [];
  filterData.forEach((ele: any) => {
    let obj = {
      Date: moment(ele.date).utc().format("MMM DD,YYYY"),
      "Packages Dispatched": ele.metrics["dispatched_packages"],
      "Packages Delivered": ele.metrics["delivered_packages"],
      "Deliverd not Receive (DNR)":
        ele.metrics["packages_delivered_not_received_(dnr)"],
      "Packages Returned to Station (RTS)":
        ele.metrics["packages_returned_to_station_(rts)"],
    };

    temp_data.push(obj);
  });
  const temp_header = Object.keys(temp_data[0]);
  return { temp_data, temp_header };
};

interface SummaryReportProps {}

const DriverDeliveryReport: React.FC<SummaryReportProps> = (props) => {
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
    <DailyReport
      loading={loading}
      tableData={tableData}
      tableHeader={tableHeader}
      reportName="Package Summary"
    />
  );
};

export default DriverDeliveryReport;
