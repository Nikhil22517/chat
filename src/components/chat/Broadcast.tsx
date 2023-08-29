import {
  Box,
  Typography,
  Stack,
  Button,
  InputBase,
  Divider,
} from "@mui/material";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import { FC, useState } from "react";

interface BroadcastProps {
  broadUser: any;
}
const BroadCast: FC<BroadcastProps> = (props) => {
  const { broadUser } = props;
  const [open, setOpen] = useState(false);

  console.log(broadUser);

  return (
    <Box
      sx={{
        height: "96.5%",
        border: "1px solid grey",
        borderRadius: "0.5rem",
        padding: "0.5rem",
      }}
    >
      <Stack
        direction="column"
        sx={{ height: "9% !important", padding: "0.6rem" }}
      >
        <Typography variant="subtitle1" sx={{ pl: "0.5rem" }}>
          Broadcast
        </Typography>
        <Typography noWrap>
          {broadUser?.map(
            (el: any, index: number) => `${index !== 0 ? "," : ""} ${el.name}`
          )}
        </Typography>
      </Stack>
      <Divider />

      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems="center"
        height="78%"
      >
        <PodcastsIcon />
        <Typography
          sx={{
            color: "grey",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          Broadcast message
        </Typography>
        <Typography
          sx={{
            color: "lightgray",
            textAlign: "center",
            width: "70%",
            fontSize: "1.7rem",
          }}
        >
          Selected drivers will receive a message from you. Replies will appear
          in individual conversations.
        </Typography>
      </Stack>

      {open && broadUser?.length > 0 ? (
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
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightblue",
          }}
        >
          <Button
            disabled={broadUser.length === 0}
            sx={{ backgroundColor: "lightblue" }}
            onClick={() => setOpen(true)}
          >
            Create BroadCast
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BroadCast;
