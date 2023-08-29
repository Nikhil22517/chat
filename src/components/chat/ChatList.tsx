import { useEffect, useMemo, useState } from "react";
import {
  Box,
  InputBase,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { FakeData } from "./utils/FakeData";
import UserDetails from "./utils/UserDetail";
import UserList from "./utils/UserList";
import SearchIcon from "@mui/icons-material/Search";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import MenuIcon from "@mui/icons-material/Menu";
import FilterList from "./utils/FilterList";
import ChatProfile from "./chatProfile";
import CloseIcon from "@mui/icons-material/Close";
import ChatPage from "./ChatPage";
import { useParams } from "react-router-dom";
const ChatList = () => {
  const [text, setText] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);
  const [broadcastOpen, setbroadCastOpen] = useState(false);
  const [broadUser, setBroadUser] = useState<any>([]);
  const [filterList, setFilterList] = useState("all");
  const { id } = useParams();
  const fetchData = FakeData.map(
    (d) =>
      new UserDetails(
        d.name,
        d.status,
        d.msgTime,
        d.message,
        d.attachment,
        d.id
      )
  );

  const searchData = useMemo(() => {
    return UserDetails.filterByStatusAndSearch(fetchData, filterList, text);
  }, [filterList, text, fetchData]);

  const handleSelectAll = () => {
    const all = fetchData.map((item) => item.id);
    setBroadUser(all);
  };

  const handleRemoveAll = () => {
    setBroadUser([]);
  };

  useEffect(() => {
    if (broadcastOpen) {
      setFilterList("active");
    } else {
      setFilterList("all");
    }
  }, [broadcastOpen]);
  return (
    <Box
      style={{
        display: "flex",
        padding: "1rem",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: "32vw",
          border: "0.5px solid grey",
          padding: broadcastOpen ? "0rem" : "0.5rem",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        {broadcastOpen && (
          <Box
            sx={{
              backgroundColor: "#2F7BCF",
              marginBottom: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton onClick={() => setbroadCastOpen(false)}>
                <CloseIcon />
              </IconButton>

              <Box>
                <Typography>Broadcast Message</Typography>
                <Typography>
                  {broadUser?.length} of {fetchData?.length} Selected
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button sx={{ color: "white" }} onClick={handleSelectAll}>
                Select All
              </Button>
              <Button sx={{ color: "white" }} onClick={handleRemoveAll}>
                Remove All
              </Button>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
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
            <InputBase
              value={text}
              sx={{ mr: "0.5rem", flex: 1 }}
              placeholder="Search Driver"
              onChange={(e) => setText(e.target.value)}
            />
            <SearchIcon />
          </Box>

          <Stack direction={"row"} spacing={2}>
            <FilterList
              filterList={filterList}
              setFilterList={setFilterList}
              broadcastOpen={broadcastOpen}
            />

            {!broadcastOpen && (
              <>
                <IconButton
                  onClick={() => {
                    setbroadCastOpen(true);
                  }}
                  sx={{
                    padding: 0,
                    color: "#2F7BCF",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <PodcastsIcon />
                </IconButton>
                <IconButton
                  onClick={() => setMenu(!menu)}
                  sx={{
                    padding: 0,
                    color: "#2F7BCF",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Stack>
        </Box>

        <Box
          sx={{ height: broadcastOpen ? "66vh" : "80vh", overflowY: "auto" }}
        >
          {searchData?.map((data) => {
            return (
              <UserList
                key={data.id}
                detail={data}
                broadcastOpen={broadcastOpen}
                setBroadUser={setBroadUser}
                broadUser={broadUser}
              />
            );
          })}
        </Box>
      </Box>

      {menu && !broadcastOpen && (
        <Box
          sx={{
            width: "35vw",
            height: "92vh",
            overflowY: "auto",
            border: "0.5px solid grey",
            borderRadius: "0.5rem",
          }}
        >
          <ChatProfile />
        </Box>
      )}

      <Box sx={{ flex: 1, height: "90vh", overflow: "auto" }}>
        {id ? (
          <ChatPage />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Select Driver</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatList;
