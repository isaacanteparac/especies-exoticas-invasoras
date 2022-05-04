import React, { useContext, useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ViewImagen from "./ViewImagen";

import { AuthContext } from "../../auth/Context";
import { styles } from "../styles";

export default function User() {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const addValueUser = () => {
    setName(user.name);
    setLastName(user.lastname);
    setUsername(user.username);
    setPhoto(user.photo);
  };

  useEffect(() => {
    addValueUser();
  });

  return (
    <Box>
      <Button onClick={handleOpen}>
        <Typography>
          {user.name} {user.lastname}
        </Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.commentsModal}>
          <ViewImagen
            viewImageSearch={true}
            image={imagen}
            animalName={props.animalName}
          />
          <Box>
            <TextField
              id="name"
              margin="dense"
              autoComplete="off"
              label="Nombre"
              value={name}
              fullWidth
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              id="lastName"
              margin="dense"
              autoComplete="off"
              label="Apellido"
              value={lastName}
              fullWidth
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <TextField
              id="username"
              margin="dense"
              autoComplete="off"
              label="Username"
              value={username}
              fullWidth
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
