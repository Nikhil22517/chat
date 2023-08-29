import React, { useEffect, useState } from "react";
import DailyReport from "./utils/DailyReport";

const Data = [
  {
    _id: "64d38d6120f56e4891d4a7d8",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "2",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1335004412",
      "timestamp(edt)": "2023-07-03 11:38:11",
      alert_type: "HARD-BRAKING",
      alert_severity: "SEVERE",
      description: "Vehicle In Front",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.6617130,-73.9826320",
      end_latlong: "40.6617550,-73.9825950",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.577Z",
    updated_at: "2023-08-09T12:58:09.577Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7d9",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "3",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1335010415",
      "timestamp(edt)": "2023-07-03 11:39:23",
      alert_type: "HARD-BRAKING",
      alert_severity: "SEVERE",
      description: "Other",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.667421,-73.977750",
      end_latlong: "40.667501,-73.977699",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.577Z",
    updated_at: "2023-08-09T12:58:09.577Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7dc",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "6",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1335897985",
      "timestamp(edt)": "2023-07-03 16:12:34",
      alert_type: "HARD-BRAKING",
      alert_severity: "SEVERE",
      description: "Vehicle In Front",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.6877570,-73.9192890",
      end_latlong: "40.6877480,-73.9192890",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.578Z",
    updated_at: "2023-08-09T12:58:09.578Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7de",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "8",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1336391701",
      "timestamp(edt)": "2023-07-03 19:26:49",
      alert_type: "HARD-BRAKING",
      alert_severity: "SEVERE",
      description: "Other",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.688663,-73.922434",
      end_latlong: "40.688663,-73.922471",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.578Z",
    updated_at: "2023-08-09T12:58:09.578Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7e3",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "13",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1334815066",
      "timestamp(edt)": "2023-07-03 10:38:31",
      alert_type: "HARD-BRAKING",
      alert_severity: "MODERATE",
      description: "Other",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.6223070,-74.1773300",
      end_latlong: "40.6223070,-74.1773300",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.579Z",
    updated_at: "2023-08-09T12:58:09.579Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7e4",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "14",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1334823578",
      "timestamp(edt)": "2023-07-03 10:41:19",
      alert_type: "HARD-BRAKING",
      alert_severity: "MODERATE",
      description: "Other",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.6269190,-74.1642230",
      end_latlong: "40.6269190,-74.1642230",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.579Z",
    updated_at: "2023-08-09T12:58:09.579Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7e7",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "17",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1334930579",
      "timestamp(edt)": "2023-07-03 11:16:26",
      alert_type: "HARD-BRAKING",
      alert_severity: "MODERATE",
      description: "Vehicle In Front",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.6072700,-74.1416400",
      end_latlong: "40.6072910,-74.1413260",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.580Z",
    updated_at: "2023-08-09T12:58:09.580Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
  {
    _id: "64d38d6120f56e4891d4a7ee",
    company_id: "67",
    date: "2023-08-08T00:00:00.000Z",
    metrics: {
      sno: "24",
      name: "Joseph Merizalde",
      netradyne_id:
        "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
      group: " ",
      vehicle_number: "Paya38",
      vin: "1F65F5KN9L0A05599",
      alert_id: "1336409154",
      "timestamp(edt)": "2023-07-03 19:35:25",
      alert_type: "HARD-BRAKING",
      alert_severity: "MODERATE",
      description: "Other",
      alert_video_status: "AVAILABLE",
      "duration(sec)": "0",
      start_latlong: "40.6872670,-73.9425140",
      end_latlong: "40.6872380,-73.9426990",
    },
    msg_sent: false,
    msg_id: null,
    created_at: "2023-08-09T12:58:09.581Z",
    updated_at: "2023-08-09T12:58:09.581Z",
    netradyne_id:
      "GH3FX3EA2PPX6J3BD6YDO3DCNQZXE2TPGR4WI5LDNF2G42TYMJYXFK7DTJ3MBDOCP73DAYU6C2BSQ7U2Z6VIQIPRVS4HXYGYSG3Q",
  },
];

const filterReport = (filterData: any) => {
  const temp_data: any = [];

  filterData?.forEach((ele: any, index: number) => {
    let obj: any = {};
    for (let [key, value] of Object.entries(ele.metrics)) {
      if (key.includes("timestamp")) {
        obj["Timestamp"] = value;
      } else if (key.trim() === "alert_severity") {
        obj["Severity"] = value;
      } else if (key.trim() === "alert_type") {
        obj["Alert Type"] = value;
      }
    }
    temp_data.push(obj);
  });

  const temp_header = ["Timestamp", "Severity", "Alert Type"];
  return { temp_data, temp_header };
};

interface AllAlertReportProps {}

const AllAlertReport: React.FC<AllAlertReportProps> = (props) => {
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
      reportName="Netradyne - All alert report"
    />
  );
};

export default AllAlertReport;
