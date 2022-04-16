import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function FormRegister(props) {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const url_api = "http://localhost:6060/i/users";


  const data = {
    name,
    lastname,
    email,
    username,
    password,
  };



  const addUser = async () => {
    await fetch(url_api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
  };

  return (
    <Box component="form" onSubmit={addUser} sx={{ mt: 1 , display:props.display}}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nombre"
        type="text"
        name="name"
        helperText="Por favor, escriba su nombre"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="lastname"
        label="Apellido"
        id="lastname"
        type="text"
        helperText="Por favor, escriba su apellido"
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="email"
        label="Email"
        id="email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="username"
        label="Username"
        id="username"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        id="password"
        type="password"
        helperText="Minimo 8 caracteres"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, marginTop: "10px" }}
      >
        Registrate
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/" variant="body2">
            {"¿tienes una cuenta? Login"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
