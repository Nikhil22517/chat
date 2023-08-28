import { JSX } from "react";
import moment, { Moment } from "moment";
import { Box, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
class UserDetails {
  name: string;
  status: string;
  msgTime: Moment;
  message: string | undefined;
  attachment: string[] | undefined;
  id: string | undefined;

  constructor(
    name: string,
    status: string,
    msgTime: string | undefined,
    message: string | undefined,
    attachment: string[] | undefined,
    id: string | undefined
  ) {
    this.name = name.length > 50 ? name.slice(0, 20) + "..." : name;
    this.status = status;
    this.msgTime = moment(msgTime);
    this.message =
      message && message.length > 50 ? message.slice(0, 30) + "..." : message;
    this.attachment = attachment;
    this.id = id;
  }

  //time format
  getMsgTime() {
    const currentTime = moment();
    if (this.msgTime.isSame(currentTime, "day")) {
      return this.msgTime.format("LT");
    } else if (
      this.msgTime.isSame(currentTime.clone().subtract(1, "days"), "day")
    ) {
      return "Yesterday";
    } else {
      return this.msgTime.format("DD/MM/YYYY");
    }
  }

  //Jsx.Element  is used to return JSX

  getMsg(): JSX.Element {
    if (this.message) {
      return <Typography variant="caption">{this.message}</Typography>;
    } else if (this.attachment) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ImageIcon sx={{ fontSize: "0.8rem" }} />
          <Typography variant="caption">Image</Typography>
        </Box>
      );
    } else {
      return <></>;
    }
  }

  //filter by status,
  //search by name, status, message

  static filterByStatusAndSearch(
    data: UserDetails[],
    selectedUser: string,
    input: string
  ): UserDetails[] {
    let filteredData = data;
    if (
      selectedUser === "active" ||
      selectedUser === "suspended" ||
      selectedUser === "inactive"
    ) {
      filteredData = filteredData.filter((d) => d.status === selectedUser);
    }
    if (input) {
      filteredData = filteredData.filter((d) =>
        d.name.toLowerCase().includes(input.toLowerCase())
      );
    }

    return filteredData;
  }
}

export default UserDetails;
