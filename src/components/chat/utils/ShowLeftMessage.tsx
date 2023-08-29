import { Avatar, Box, Typography } from "@mui/material";
import moment from "moment";

interface ShowLeftMessageProps {
  auth?: any;
  message?: string;
  attachment?: any;
  time?: string;
  viewImage?: any;
  setEventT?: any;
  setTagData?: any;
  msgData?: any;
}
const ShowLeftMessage: React.FC<ShowLeftMessageProps> = (props) => {
  const {
    message,
    attachment,
    time,
    auth,
    viewImage,
    setTagData,
    setEventT,
    msgData,
  } = props;

  return (
    <>
      <Typography
        variant="caption"
        color="textSecondary"
        component="p"
        sx={{ p: "0.4rem" }}
      >
        {moment.utc(time).local().format("MMM Do, h:mm a")}
      </Typography>

      <Box
        // className={styles.leftMsgWrapper}
        sx={{}}
        onContextMenu={(e) => {
          e.preventDefault();
          setEventT(e);
          setTagData(msgData);
        }}
      >
        {attachment?.length > 0 &&
          attachment.map((item: any) => {
            return (
              <>
                {item?.url?.includes(".pdf") ? (
                  <pre>
                    <Typography
                      variant="body2"
                      whiteSpace={"break-spaces"}
                      //   color={theme.palette.common.black}
                    >
                      {message}
                    </Typography>
                  </pre>
                ) : (
                  <Box
                  // className={styles.attachmentWrapper}
                  // onClick={() => viewImage(item.url, time)}
                  >
                    <Avatar
                      src={item.url}
                      variant="rounded"
                      sx={{ height: "auto", width: "auto", maxWidth: "26vh" }}
                    />
                  </Box>
                )}
              </>
            );
          })}
        {message && (
          <pre>
            <Typography
              variant="body2"
              whiteSpace={"break-spaces"}
              //   color={theme.palette.common.black}
            >
              {message}
            </Typography>
          </pre>
        )}
      </Box>
    </>
  );
};

export default ShowLeftMessage;
