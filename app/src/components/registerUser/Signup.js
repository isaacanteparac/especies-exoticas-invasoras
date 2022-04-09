import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Signup() {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const url_api = "ruta de api";

  const data = {
    name,
    lastname,
    email,
    username,
    password,
  };

  /*function handleSubmit_(e){
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }*/

  fetch(url_api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("error", error))
    .then((res) => console.log("success", res));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Registrate Gratis
          </Typography>
          <Box
            component="form"
            /*onSubmit={handleSubmit}*/ noValidate
            sx={{ mt: 1 }}
          >
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrate
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿tienes una cuenta? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
