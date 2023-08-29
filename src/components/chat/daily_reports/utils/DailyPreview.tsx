import React from "react";
import { Box, Button, Modal, Typography, Stack } from "@mui/material";
import moment from "moment";
import BasicTable from "./BasicTable";
import EmentorTable from "./EmentorTable";
const modal_style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  height: "85vh",
  boxShadow: 24,
  p: 4,
  // pt: 1,
};

interface IProps {
  data?: any;
  header?: any;
  reportName?: string;
  headerLabelObj: any;
}
const DailyPreview: React.FC<IProps> = (props) => {
  const { header, data, reportName, headerLabelObj } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: "lightblue !important",
          color: "black !important",
          ":hover": {
            backgroundColor: "blue",
          },
        }}
        size="small"
      >
        Preview
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal_style}>
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                height: "95%",
                overflow: "auto",
                width: "100%",
                "&::-webkit-scrollbar": {
                  display: "none !important",
                },
              }}
            >
              <Box id="dailysnap" sx={{ width: "100%" }}>
                <Typography variant="h5" textAlign={"center"}>
                  {reportName}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Typography variant="subtitle1">Driver Name</Typography>

                  <Box>
                    <Typography
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >{`${moment().format("MMMM DD, YYYY")} to ${moment().format(
                      "MMMM DD, YYYY"
                    )}`}</Typography>
                  </Box>
                </Stack>

                <Box>
                  {!headerLabelObj && (
                    <BasicTable data={data} header={header} />
                  )}

                  {headerLabelObj && (
                    <EmentorTable
                      data={data}
                      header={header}
                      headerLabel={headerLabelObj}
                    />
                  )}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginBottom: "1rem",
                width: "100%",
                marginInline: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ marginBottom: "1rem", padding: "0.3rem" }}
                variant="contained"
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DailyPreview;
