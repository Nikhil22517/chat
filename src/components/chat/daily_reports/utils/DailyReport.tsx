import React, { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";
import BasicTable from "./BasicTable";
import EmentorTable from "./EmentorTable";
import DailyPreview from "./DailyPreview";

interface DailyReportProps {
  loading: boolean;
  tableData: any;
  tableHeader: string[];
  reportName: string;
  headerLabel?: string[];
}

const DailyReport: FC<DailyReportProps> = (props) => {
  const { loading, tableData, tableHeader, reportName, headerLabel } = props;

  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          border: `1px solid grey`,
          borderRadius: "0.4rem",
          height: "40vh",
          overflow: "auto",
          marginBottom: "1rem",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {reportName}
          </Typography>
          <DailyPreview
            data={tableData}
            header={tableHeader}
            reportName={reportName}
            headerLabelObj={headerLabel}
          />
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
            {headerLabel && Object.keys(tableData).length > 0 && (
              <EmentorTable
                data={tableData}
                header={tableHeader}
                headerLabel={headerLabel}
              />
            )}
            {!headerLabel && tableData.length > 0 && (
              <BasicTable data={tableData} header={tableHeader} />
            )}

            {Object.keys(tableData).length === 0 && (
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

            {tableData.length === 0 && (
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
    </>
  );
};

export default DailyReport;
