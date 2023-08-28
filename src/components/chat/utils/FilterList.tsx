import {
  IconButton,
  MenuItem,
  Checkbox,
  Menu,
  MenuProps,
  Divider,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FC, useState } from "react";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.secondary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const checkBoxStyle = {
  padding: 0,
  color: "theme.palette.secondary.main",
  "& > svg": { color: "#2F7BCF !important" },
};

interface FilterListProps {
  filterList: string;
  setFilterList: any;
  broadcastOpen: boolean;
}

const FilterList: FC<FilterListProps> = (props) => {
  const { filterList, setFilterList, broadcastOpen } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          color: "#2F7BCF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <FilterAltIcon />
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!broadcastOpen && (
          <MenuItem
            onClick={() => {
              setFilterList("all");
              handleClose();
            }}
          >
            <Checkbox
              disableRipple
              sx={checkBoxStyle}
              checked={filterList === "all"}
            />
            All
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            setFilterList("active");
            handleClose();
          }}
        >
          <Checkbox
            disableRipple
            sx={checkBoxStyle}
            checked={filterList === "active"}
          />
          Active
        </MenuItem>
        {!broadcastOpen && (
          <>
            <MenuItem
              onClick={() => {
                setFilterList("inactive");
                handleClose();
              }}
            >
              <Checkbox
                disableRipple
                sx={checkBoxStyle}
                checked={filterList === "inactive"}
              />
              Inactive
            </MenuItem>

            <MenuItem
              onClick={() => {
                setFilterList("suspended");
                handleClose();
              }}
            >
              <Checkbox
                disableRipple
                sx={checkBoxStyle}
                checked={filterList === "suspended"}
              />
              Suspended
            </MenuItem>
          </>
        )}

        <MenuItem
          onClick={() => {
            setFilterList("roster");
            handleClose();
          }}
        >
          <Checkbox
            disableRipple
            sx={checkBoxStyle}
            checked={filterList === "roster"}
          />
          Roster
        </MenuItem>

        {!broadcastOpen && (
          <>
            <Divider />
            <MenuItem
              onClick={() => {
                setFilterList("unread");
                handleClose();
              }}
            >
              <Checkbox
                disableRipple
                sx={checkBoxStyle}
                checked={filterList === "unread"}
              />
              Unread
            </MenuItem>
          </>
        )}
      </StyledMenu>
    </>
  );
};

export default FilterList;
