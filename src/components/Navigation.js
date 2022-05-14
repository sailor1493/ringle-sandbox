import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const style = {
  width: "100%",
  maxWidth: 200,
  minWidth: 200,
  bgcolor: "background.paper",
  borderRight: "1px solid rgba(0,0,0,0.1)",
  height: "100vh",
  overflowY: "scroll"
};

export default function Navigation() {
  let navigate = useNavigate();

  const move = (page) => {
    navigate("/" + page);
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <Divider />
      <ListItem button divider onClick={(e) => move("createMemo")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Create Memo" />
      </ListItem>
      <ListItem button divider onClick={(e) => move("memoList")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Memo List" />
      </ListItem>
    </List>
  );
}
