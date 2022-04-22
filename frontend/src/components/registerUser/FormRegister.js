import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { AuthContext } from "../../auth/Context";

export default function FormRegister(props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {sign_up} = useContext(AuthContext);

  const data = {
    name,
    lastname,
    email,
    username,
    password,
  };

  const createUser = async () => {
    sign_up(data.name, data.lastname, data.email, data.username, data.password);
  };


  return (
    <Box component="form" onSubmit={createUser} sx={{ mt: 1 , display:props.display}}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nombre"
        type="text"
        name="name"
        value={name}
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
        value={lastname}
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
        value={email}
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
        value={username}
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
        value={password}
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
