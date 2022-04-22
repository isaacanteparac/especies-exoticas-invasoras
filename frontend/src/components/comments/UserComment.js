import React, { Component } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { styles } from "../styles";

export default function UserComment(props) {
  return (
    <ListItem
      alignItems="flex-start"
      sx={styles.oneComment}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          I
        </Avatar>
      </ListItemAvatar>
      <ListItemText sx={{overflow:"hidden"}}
        primary={props.username}
        secondary={
          <React.Fragment>
            {props.comment_user}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
