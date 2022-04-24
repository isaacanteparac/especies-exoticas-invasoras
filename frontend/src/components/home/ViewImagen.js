import React, { useState, useEffect } from "react";

import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import { styles } from "../styles";

export default function ViewImagen(props) {
  const [viewImageSearch, setViewImageSearch] = useState(false);
  const [viewZoom, setViewZoom] = React.useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setViewZoom(true);
  };
  const handleClose = () => {
    setOpen(false);
    setViewZoom(false);
  };
  useEffect(() => {
    setViewImageSearch(props.viewImageSearch);
  });

  return (
    <Box>
      {viewImageSearch ? (
        <Box sx={styles.boxImagenSearch} onClick={handleOpen}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              borderRadius: "10px",
              maxHeight: "250px",
              cursor: "pointer",
            }}
            image={props.image}
          />
        </Box>
      ) : null}

      <Modal open={open} onClose={handleClose}>
        <Zoom in={viewZoom}>
          <Box sx={styles.modalImagen}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                borderRadius: "10px",
                maxHeight: "550px",
              }}
              image={props.image}
            />
          </Box>
        </Zoom>
      </Modal>
    </Box>
  );
}
