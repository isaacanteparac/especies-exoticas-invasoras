import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import CardMedia from "@mui/material/CardMedia";


import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScienceIcon from "@mui/icons-material/Science";
import PetsIcon from "@mui/icons-material/Pets";
import Chip from "@mui/material/Chip";
import ForumIcon from '@mui/icons-material/Forum';

import CreateComment from "./CreateComment";
import { styles } from "../styles";


export default function Comments(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const imagen = "https://cf.ltkcdn.net/ninos/images/orig/240406-1600x1030-caracol.jpg"



  return (

    <Box>
    
      <IconButton aria-label="comentarios" onClick={handleOpen} sx={{position:"relative"}}>
        <ForumIcon />
      </IconButton>


      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.commentsModal}>
          <Box sx={styles.boxComment}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textTransform:"capitalize" }}>
              {props.animalName}
            </Typography>
            <Typography
              sx={{
                color: "#999",
              }}
            >
              {props.nameUser} {props.lastnameUser} ({props.usernameUser})
            </Typography>
            <CardMedia component="img" height="250" image={imagen} sx={{borderRadius:"15px"}}/>
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
