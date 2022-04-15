import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const theme = createTheme();

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullUsername, setFullUsername] = useState([]);
  const url_api = "http://localhost:6060/i/users/verify-user";

  const data = {
    username,
    password,
  };

  const allUser = async() =>{
    await fetch(url_api, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setFullUsername(data);
      });
    alert(fullUsername);
  }



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
            Login {fullUsername}
          </Typography>
          <Box
            component="form"
            onSubmit={allUser}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
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
              type="password"
              id="password"
              autoComplete="current-password"
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
              Login
            </Button>
            <Grid container>
              {/*<Grid item xs>
                <Link href="#" variant="body2">
                  Olvidó la contraseña?
                </Link>
              </Grid>*/}
              <Grid item>
                <Link href="signup" variant="body2">
                  {"¿No tienes una cuenta? Resgistrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}
