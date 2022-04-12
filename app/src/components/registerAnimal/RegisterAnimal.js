import React, { useState, useEffect} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const currencies = [
  {
    value: "1",
    label: "mamifero",
  },
  {
    value: "2",
    label: "reptil",
  },
];

export default function RegisterAnimal() {
  const [name, setName] = useState(null);
  const [scientificName, setScientificName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [sound, setSound] = useState(null);
  const [description, setDescription] = useState(null);
  const [typeSpecie, setTypeSpecie] = useState(null);
  const [allTypesSpecie, setAllTypesSpecie] = useState([]);
  const url_api = "/i/register-animal";
  const url_api_types_specie = "/i/ctlg/types-specie";

  const data = {
    name,
    photo,
    location,
    sound,
    description,
    scientificName,
    typeSpecie,
  };

  async function getTypesSpecie(){
    fetch(url_api_types_specie, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("error", error))
      .then(dataTypesSpecies => {setAllTypesSpecie(dataTypesSpecies.total)});
    console.log(allTypesSpecie);
}

  const addAnimal = (e) => {
    fetch(url_api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("error", error))
      .then((res) => console.log("success", res));

    console.log(
      name,
      photo,
      location,
      sound,
      description,
      scientificName,
      typeSpecie
    );
    setName(null);
    setDescription(null);
    setLocation(null);
    setTypeSpecie(null);
    setPhoto(null);
    setSound(null);
    setScientificName(null);

    e.preventDeaful();
  };


  useEffect(() => {
    const componentDidMount = () =>{
      getTypesSpecie();
    }
    
  });



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
          <form onSubmit={addAnimal}>
            <Typography component="h1" variant="h5">
              Registra el animal
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
                label="Nombre común"
                name="name"
                autoFocus
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                name="scientificName"
                label="Nombre científico"
                type="text"
                id="scientificName"
                onChange={(e) => {
                  setScientificName(e.target.value);
                }}
              />

              <TextField
                id="outlined-select-currency"
                select
                label="tipos de especies"
                //value={currency}
                onChange={(e) => {
                  setTypeSpecie(e.target.value);
                }}
                margin="normal"
                fullWidth
              >
                {allTypesSpecie.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-textarea"
                multiline
                required
                label="Descripcion"
                margin="normal"
                fullWidth
                maxRows={3}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <TextField
                //id="outlined-textarea"
                label="Agregar foto"
                margin="normal"
                fullWidth
                typeof="file"
                onChange={(e) => {
                  setPhoto(e.target.value);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "orange", fontWeight: "600" }}
              >
                Registrar
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
