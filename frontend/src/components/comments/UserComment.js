import React, { useState, useEffect, useContext } from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Popover from "@mui/material/Popover";
import DeleteIcon from "@mui/icons-material/Delete";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";

import { red } from "@mui/material/colors";

import { styles } from "../styles";
import { AuthContext } from "../../auth/Context";
import { yesToken } from "../../helpers/crud_fetch";


export default function UserComment(props) {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const [option, setoption] = useState(null);
  const open = Boolean(option);
  const id_option = open ? "simple-popover" : undefined;
  const [getOption, setGetOption] = useState("none");

  const openOption = (e) => {
    setoption(e.currentTarget);
  };

  const closeOption = () => {
    setoption(null);
  };

  const viewOption = () =>{
    if(props.userId == user.id){
      setGetOption("block");
    }
  }

  const deleteComment = async () =>{
    if(getOption == "block"){
      const idComment = "comment/"+props.commentId;
      await yesToken(idComment,"","DELETE");
    }
    else{
      alert("No se ha podido eliminar el comentario");
    }
  }

  useEffect(() => {
    viewOption();
  }, []);

  

  return (
    <ListItem alignItems="flex-start" sx={styles.oneComment}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          I
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{ overflow: "hidden", position: "relative", right: "5px" }}
        primary={props.username}
        secondary={<React.Fragment>{props.comment_user}</React.Fragment>}
      />

      <IconButton onClick={openOption}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id_option}
        open={open}
        anchorEl={option}
        onClose={closeOption}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List component="nav" sx={{ padding: "5px" }}>
            <ListItemButton sx={styles.iconItemsListItemButton} >
              <ListItemIcon>
                <EditIcon/>
              </ListItemIcon>
              <ListItemText primary="Editar"/>
            </ListItemButton>

            <ListItemButton sx={styles.iconItemsListItemButton} onClick={deleteComment}>
              <ListItemIcon>
                <DeleteIcon/>
              </ListItemIcon>
              <ListItemText
                primary="Eliminar"
              />
            </ListItemButton>
          </List>
      </Popover>
    </ListItem>
  );
}
