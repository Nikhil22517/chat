import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import { ErrorOutline, DoneAllOutlined } from "@mui/icons-material";

interface ShowRightMessageProps {
  auth?: any;
  message?: string;
  attachment?: any;
  twilio_error?: string;
  time?: string;
  from?: string;
  get_sender_name?: any;
  viewImage?: any;
  tagNames?: any;
  msgData?: any;
  setEventT?: any;
  setTagData?: any;
}
const ShowRightMessage: React.FC<ShowRightMessageProps> = (props) => {
  const {
    auth,
    message,
    attachment,
    twilio_error,
    get_sender_name,
    time,
    from,
    viewImage,
    msgData,
    setEventT,
    setTagData,
  } = props;

  return (
    <>
      <Typography variant="caption" color="textSecondary" sx={{ p: "0.4rem" }}>
        {/* {get_sender_name(from)} &#183;{" "} */}
        {moment.utc(time).local().format("MMM Do, h:mm a")}
      </Typography>

      <Box
        // className={styles.rightMsgWrapper}
        onContextMenu={(e) => {
          e.preventDefault();
          setEventT(e);
          setTagData(msgData);
        }}
      >
        {attachment && attachment.length > 0 && (
          <>
            {attachment[0].includes(".pdf") ? (
              <pre>
                <Typography
                  variant="body2"
                  whiteSpace={"break-spaces"}
                  sx={{ overflowWrap: "break-word" }}
                  //   color={theme.palette.common.white}
                >
                  {attachment[0]}
                </Typography>
              </pre>
            ) : (
              <Box
                // className={styles.attachmentWrapper}
                onClick={() => {
                  //   viewImage(attachment[0], time, 0);
                }}
              >
                <Avatar
                  src={attachment[0]}
                  variant="rounded"
                  sx={{ height: "auto", width: "auto", maxWidth: "26vh" }}
                />
              </Box>
            )}
          </>
        )}
        {message && (
          <pre>
            <Typography
              variant="body2"
              whiteSpace={"break-spaces"}
              sx={{ overflowWrap: "break-word" }}
              //   color={theme.palette.common.white}
            >
              {message}
            </Typography>
          </pre>
        )}
      </Box>
      {twilio_error ? (
        <>
          {/* <Tooltip
            placement="left"
            arrow
            title={
              Error_Codes?.find((el: any) => el.code === twilio_error)?.message
            }
            componentsProps={{
              tooltip: { sx: { backgroundColor: "#f00000" } },
              arrow: { sx: { color: "#ff0808" } },
            }}
          > */}
          <ErrorOutline
            sx={{ mt: 1, mr: 1, color: "#ff0808", fontSize: "1rem" }}
          />
          {/* </Tooltip> */}
        </>
      ) : (
        <Tooltip
          arrow
          placement="left"
          title="Message  Delivered"
          componentsProps={{
            tooltip: { sx: { backgroundColor: "#0077B6" } },
            arrow: { sx: { color: "#0077B6" } },
          }}
        >
          <DoneAllOutlined
            sx={{ mt: 1, mr: 1, color: "#0077B6", fontSize: "1rem" }}
          />
        </Tooltip>
      )}
    </>
  );
};

export default ShowRightMessage;
