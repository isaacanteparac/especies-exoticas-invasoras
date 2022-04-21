import React, { useState } from "react";

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ItemRegisterAnimal() {

  return (
    <ListItemButton>
      <ListItemIcon>
        <PlaylistAddIcon />
      </ListItemIcon>
      <ListItemText primary="Registrar Animal" />
    </ListItemButton>
  );
}
