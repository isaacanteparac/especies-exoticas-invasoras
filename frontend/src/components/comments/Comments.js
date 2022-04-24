import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import CardMedia from "@mui/material/CardMedia";


import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScienceIcon from "@mui/icons-material/Science";
import PetsIcon from "@mui/icons-material/Pets";
import Chip from "@mui/material/Chip";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import { AuthContext } from "../../auth/Context";
import CreateComment from "./CreateComment";
import CardSearch from "../home/CardSearch";
import { styles } from "../styles";


export default function Comments(props) {
  const [open, setOpen] = useState(false);
  const { auth } = useContext(AuthContext);
  const { user } = auth;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };




  return (

    <Box>
    
      <IconButton aria-label="comentarios" onClick={handleOpen} sx={{position:"relative"}}>
        <ModeCommentIcon />
      </IconButton>


      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.commentsModal}>
          <Box sx={styles.boxComment}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600" }}>
              {props.animalName}
            </Typography>
            <Typography
              sx={{
                color: "#999",
              }}
            >
              {props.nameUser} {props.lastnameUser} ({props.usernameUser})
            </Typography>
            <CardMedia component="img" height="250" image={props.animalPhoto} />
            <Box
              sx={{
                margin: "5px 0",
              }}
            >
              <Chip
                label={props.typeSpecie}
                icon={<PetsIcon />}
                sx={styles.chipComment}
                size="small"
              />

              <Chip
                icon={<LocationOnIcon />}
                sx={styles.chipComment}
                label={props.location}
                size="small"
              />

              <Chip
                icon={<ScienceIcon />}
                sx={styles.chipComment}
                label={props.scientificName}
                size="small"
              />
            </Box>
            <Box sx={styles.boxDescription}>
              <Typography variant="body1" color="text.primary">
                {props.description}
              </Typography>
            </Box>
          </Box>
          <CreateComment id_animal={props.id_animal} />
        </Box>
      </Modal>
    </Box>
  );
}
