import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ItemHome() {
  return (
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  );
}
