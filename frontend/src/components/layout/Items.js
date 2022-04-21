import React from "react";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function Items() {
  return (
    <List component="nav">
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="Registrar Animal" />
      </ListItemButton>
    </List>
  );
}
