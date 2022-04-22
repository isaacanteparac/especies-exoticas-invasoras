import React, { useState, useEffect, useContext } from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Popover from "@mui/material/Popover";
import DeleteIcon from "@mui/icons-material/Delete";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";


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
  const [optionUpdate, setOptionUpdate] = useState(null);
  const id_update = optionUpdate ? "simple-popover" : undefined;
  const [getOption, setGetOption] = useState(false);

  const [comment, setComment] = useState("");

  const data = {
    comment
  }

  const openOption = (e) => {
    setoption(e.currentTarget);
  };

  const closeOption = () => {
    setoption(null);
  };

  const openViewUpdate = (e) => {
    setOptionUpdate(e.currentTarget);
  };

  const closeViewUpdate = () =>{
    setOptionUpdate(null);
  }

  const viewOption = () => {
    if (props.userId == user.id) {
      setGetOption(true);
      setComment(props.comment_user);
    }
  };

  const updateComment = async () => {
    
    if (getOption) {
      closeViewUpdate();
      const putcomment = "comment/update/" + props.commentId;
      await yesToken(putcomment, data, "PUT");
    } else {
      alert("No se pudo actualizar");
    }
    
  }

  const deleteComment = async () => {
    if (getOption) {
      closeOption();
      const idComment = "comment/" + props.commentId;
      await yesToken(idComment, "", "DELETE");
    } else {
      alert("No se ha podido eliminar el comentario");
    }
  };

  useEffect(() => {
    viewOption();
  },[]);

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

      {getOption? <IconButton onClick={openOption}>
        <MoreVertIcon />
      </IconButton> : null}
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
          <ListItemButton sx={styles.iconItemsListItemButton} onClick={openViewUpdate}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Editar" />
          </ListItemButton>

          <ListItemButton
            sx={styles.iconItemsListItemButton}
            onClick={deleteComment}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Eliminar" />
          </ListItemButton>
        </List>
      </Popover>



      <Popover
        id={id_update}
        open={optionUpdate}
        anchorEl={optionUpdate}
        onClose={closeViewUpdate}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box>
          <Input
          placeholder="Comenta"
          name="comment"
          id="comment"
          type="text"
          autoFocus
          autoComplete="off"
          disableUnderline={true}
          value={comment}
          maxRows={3}
          sx={{height:"50px", padding:"0 5px"}}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <IconButton sx={styles.buttonAddCommment} onClick={updateComment}>
          <EditIcon sx={{ color: "#fff" }} />
        </IconButton>
        </Box>
      </Popover>

    </ListItem>
  );
}
