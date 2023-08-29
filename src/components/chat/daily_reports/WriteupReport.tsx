import React, { useEffect, useState, useContext } from "react";

import moment from "moment";
import WriteupTable from "./utils/WriteUpTable";
import { Box } from "@mui/system";
const filterReport = (filterData: any) => {
  const temp_data: any = [];

  filterData.forEach((el: any) => {
    el["Date"] = moment.utc(el["report_date"]).format("MMM DD, YYYY");

    el["Status"] = el["status"];
    el["report_date"] = moment(el["report_date"]).format("MM-DD-YYYY");
    if (el.status === "sent") {
      el["Actions"] = ["View", "refused_to_sign"];
    } else {
      el["Actions"] = ["View"];
    }
    // delete el["status"];

    temp_data.push(el);
  });
  const temp_header = ["Date", "Status", "Actions"];
  return { temp_data, temp_header };
};

const Data = [
  {
    _id: "64cce8678837e5831997900b",
    company_id: "67",
    driver_id: "4745",
    driver_name: "Abdurrahman  Dragjoshi",
    report_url: null,
    report_date: "2023-08-04T00:00:00.000Z",
    status: "sent",
    violation: ["Following Distance"],
    notes: "",
    driver_sign_url: null,
    company_logo_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_logo.jpeg",
    company_sign_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_sign.jpeg",
    created_by_name: "nikhil",
    created_by: "65839059",
    driver_sign_date: null,
    created_at: "2023-08-04T12:00:39.054Z",
    updated_at: "2023-08-04T12:00:39.054Z",
    uuid: "87528010-32be-11ee-a674-dd3a00131d6d",
    __v: 0,
    message_till: "2023-08-04T12:00:41.566Z",
    message_uuid: "88d17ef0-32be-11ee-a674-dd3a00131d6d",
  },
  {
    _id: "64d0b3128837e5831998722c",
    company_id: "67",
    driver_id: "4745",
    driver_name: "Abdurrahman  Dragjoshi",
    report_url: null,
    report_date: "2023-08-07T00:00:00.000Z",
    status: "sent",
    violation: [
      "Not completing the route within the allowed time",
      "Bringing back too many packages",
      "Following Distance",
    ],
    notes: "",
    driver_sign_url: null,
    company_logo_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_logo.jpeg",
    company_sign_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_sign.jpeg",
    created_by_name: "nikhil",
    created_by: "65839059",
    driver_sign_date: null,
    created_at: "2023-08-07T09:02:10.607Z",
    updated_at: "2023-08-07T09:02:10.607Z",
    uuid: "17d44210-3501-11ee-a674-dd3a00131d6d",
    __v: 0,
    message_till: "2023-08-07T09:02:12.765Z",
    message_uuid: "191d63e0-3501-11ee-a674-dd3a00131d6d",
  },
  {
    _id: "64d394f5045c0ee94782090e",
    company_id: "67",
    driver_id: "4745",
    driver_name: "Abdurrahman  Dragjoshi",
    report_url: null,
    report_date: "2023-08-09T00:00:00.000Z",
    status: "sent",
    violation: [
      "Not completing the route within the allowed time",
      "Bringing back too many packages",
      "Following Distance",
    ],
    notes: "",
    driver_sign_url: null,
    company_logo_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_logo.jpeg",
    company_sign_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_sign.jpeg",
    created_by_name: "nikhil",
    created_by: "65839059",
    driver_sign_date: null,
    created_at: "2023-08-09T13:30:29.718Z",
    updated_at: "2023-08-09T13:30:29.718Z",
    uuid: "e878fe70-36b8-11ee-86a3-efe2c3520c83",
    __v: 0,
    message_till: "2023-08-09T13:30:31.434Z",
    message_uuid: "e97ed5b0-36b8-11ee-86a3-efe2c3520c83",
  },
  {
    _id: "64d488813cb1e3eb61ad99fd",
    company_id: "67",
    driver_id: "4745",
    driver_name: "Abdurrahman  Dragjoshi",
    report_url: null,
    report_date: "2023-08-10T00:00:00.000Z",
    status: "sent",
    violation: [
      "Accidents / Not Reporting Accidents",
      "Excessive Delivered Not Received (DNR) / Tier Infraction",
      "Following Distance",
    ],
    notes: "",
    driver_sign_url: null,
    company_logo_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_logo.jpeg",
    company_sign_url:
      "https://d2jilumhwuwrmw.cloudfront.net/incident-report/development/67/company_sign.jpeg",
    created_by_name: "nikhil",
    created_by: "65839059",
    driver_sign_date: null,
    created_at: "2023-08-10T06:49:37.737Z",
    updated_at: "2023-08-10T06:49:37.737Z",
    uuid: "12ca00c0-374a-11ee-8245-e7e699a6f70f",
    __v: 0,
    message_till: "2023-08-10T06:49:39.700Z",
    message_uuid: "13f51340-374a-11ee-8245-e7e699a6f70f",
  },
];

const WriteUpReport = () => {
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
    <>
      <WriteupTable
        title={"Write-up Report"}
        data={tableData}
        header={tableHeader}
        hidePreview={true}
        loading={loading}
      />
    </>
  );
};

export default WriteUpReport;
