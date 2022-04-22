import React, { Component } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function UserComment(props) {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{ backgroundColor: "#D5DEE7", borderRadius: "15px", borderTopLeftRadius:"0" }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          I
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.username}
        secondary={
          <React.Fragment>
            {props.comment}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
