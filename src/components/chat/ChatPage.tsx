import { Box, Stack, Typography, Button, InputBase } from "@mui/material";
import { FakeMsg } from "./utils/FakeMsg";
import ShowLeftMessage from "./utils/ShowLeftMessage";
import ShowRightMessage from "./utils/ShowRightMessage";
import moment from "moment";
import { useEffect, useState } from "react";
const ChatPage = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const handleMessageDate = (e: any) => {
    if (moment().isSame(moment.utc(e).local().format("L"), "day")) {
      return true;
    }
    return false;
  };

  const setChatDate = (currDate: any, index: any) => {
    if (FakeMsg[index + 1]) {
      let preDate = FakeMsg[index + 1]?.created_at;
      if (moment(currDate).isSame(preDate, "day")) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
  useEffect(() => {
    if (FakeMsg) {
      const temp: any[] = [];
      FakeMsg?.forEach((msg: any, index: number) => {
        const printDate: boolean = setChatDate(msg.created_at, index);
        const currentDate = handleMessageDate(msg.created_at)
          ? "Today"
          : moment(msg.created_at).format("MMM Do YYYY");
        if (printDate) temp.push({ ...msg, date: currentDate });
        else temp.push({ ...msg, date: "" });
      });
      setMessages([...temp]);
    }
  }, [FakeMsg]);
  return (
    <Box
      sx={{
        height: "96.5%",
        border: "1px solid grey",
        borderRadius: "0.5rem",
        padding: "0.5rem",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography>Name</Typography>
        <Button>Export Chat</Button>
      </Stack>

      <Box
        sx={{
          height: "75vh",
          overflowY: "scroll",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {messages?.map((msg: any, index: number) => {
          if (msg.is_driver) {
            return (
              <>
                <Box
                  key={msg.uuid}
                  id={msg.uuid}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft: "0.8rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  <ShowLeftMessage
                    msgData={msg}
                    // setEventT={setEventT}
                    // setTagData={setTagData}
                    message={msg.message}
                    attachment={msg.attachments}
                    time={msg.created_at}
                    // viewImage={viewImage}
                  />
                </Box>
                {msg.date?.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        boxShadow: "0px 0px 5px #ededed",
                        borderRadius: "0.25rem",
                        fontSize: "0.875rem !important",
                        fontWeight: "bold !important",
                        padding: "0.2rem",
                        color: "grey",
                      }}
                    >
                      {msg?.date}
                    </Typography>
                  </Box>
                )}
              </>
            );
          } else {
            return (
              <>
                <Box
                  key={msg.uuid}
                  id={msg.uuid}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    paddingRight: "0.8rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  <ShowRightMessage
                    msgData={msg}
                    // setEventT={setEventT}
                    // setTagData={setTagData}
                    // get_sender_name={get_sender_name}
                    from={msg.from}
                    message={msg.message}
                    attachment={msg.attachments}
                    twilio_error={msg.twilio_error}
                    time={msg.created_at}
                    // viewImage={viewImage}
                    tagNames={msg.tagNames}
                  />
                </Box>
                {msg.date?.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        boxShadow: "0px 0px 5px #ededed",
                        borderRadius: "0.25rem",
                        fontSize: "0.875rem !important",
                        fontWeight: "bold !important",
                        padding: "0.2rem",
                        color: "grey",
                      }}
                    >
                      {msg?.date}
                    </Typography>
                  </Box>
                )}
              </>
            );
          }
        })}
      </Box>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        sx={{ marginTop: "0.5rem" }}
      >
        <Button>Chat</Button>
        <Button>Chat</Button>
        <Button>Chat</Button>
        <Box
          sx={{
            background: "white",
            border: "1px solid #e2dfdf",
            display: "flex",
            alignItems: "center",
            padding: "0.09rem 1rem !important",
            borderRadius: "0.5rem",
            flex: 1,
          }}
        >
          <InputBase sx={{ mr: "0.5rem", flex: 1 }} />
        </Box>
        <Button>Send</Button>
      </Stack>
    </Box>
  );
};

export default ChatPage;
