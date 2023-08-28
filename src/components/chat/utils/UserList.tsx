import { Box, Typography, Avatar, Stack, Checkbox } from "@mui/material";
import UserDetails from "./UserDetail";
import { FC } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

const stringToColor = (string: string) => {
  let hash = 0;
  let i = 0;

  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value?.toString(16)}`.slice(-2);
  }
  return color;
};

const AvatarColor = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      height: "1.8rem",
      width: "1.8rem",
      fontSize: "0.6rem",
    },
    children: ` ${
      name?.split(" ").length === 1
        ? name?.split(" ")[0][0]?.toUpperCase()
        : name?.split(" ")[0][0]?.toUpperCase() +
          name?.split(" ")[name?.split(" ")?.length - 1][0]?.toUpperCase()
    }`,
  };
};
interface UserListProps {
  detail: UserDetails;
  broadcastOpen: boolean;
  broadUser: any;
  setBroadUser: any;
}
const UserList: FC<UserListProps> = (props) => {
  const { detail, broadcastOpen, broadUser, setBroadUser } = props;

  const color = (status: string) => {
    switch (status) {
      case "active":
        return "green";
      case "suspended":
        return "red";
      case "inactive":
        return "darkred";
      default:
        return "grey";
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: any
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setBroadUser([...broadUser, data.id]);
    } else {
      setBroadUser(broadUser.filter((item: any) => item !== data.id));
    }
  };

  return (
    <Link to={`/${detail.id}`}>
      <Box
        sx={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          "&:hover": {
            backgroundColor: "#DEF2FF",
          },
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          {broadcastOpen && (
            <>
              <Checkbox
                checked={broadUser.includes(detail.id)}
                size="small"
                onChange={(event) => handleChange(event, detail)}
                value={detail.id}
              />
            </>
          )}

          <Stack direction="row" spacing={2}>
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: color(detail.status),
                },
              }}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Driver Name"
                {...AvatarColor(detail?.name?.trim())}
              />
            </Badge>
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>
                {detail.name}{" "}
                {detail.status === "suspended" && (
                  <span style={{ border: "1px solid grey" }}>Suspended</span>
                )}
              </Typography>
              {detail.getMsg()}
            </Box>

            {detail.getMsgTime()}
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default UserList;
