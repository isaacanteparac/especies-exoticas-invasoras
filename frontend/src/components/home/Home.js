import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardAnimal from "../animal/CardAnimal";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";

import { yesToken } from "../../helpers/crud_fetch";

export default function Home(props) {
  const [checked, setChecked] = useState(true);
  const [allAnimal, setAllAnimal] = useState([]);

  const viewAnimal = async () => {
    const dataAllAnimal = await yesToken("animal");
    setAllAnimal(dataAllAnimal);
  };

  useEffect(() => {
    viewAnimal();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Grid container spacing={1}>
        {allAnimal?.map((animal) => (
          <Zoom in={checked}>
            <Grid item xs={4} sx={{ margin: "10px 0" }} key={animal.id}>
              <CardAnimal
                key={animal.id}
                nameAnimal={animal.nameAnimal}
                scientificName={animal.scientificName}
                description={animal.description}
                location={animal.location}
                name={animal.name}
                lastname={animal.lastname}
                username={animal.username}
                photo={animal.photo}
                animalPhoto={animal.animalPhoto}
                typeSpecie={animal.typeSpecie}
                id_animal={animal.id}
                userId={animal.userId}
                id_ctlg_type_specie={animal.id_ctlg_type_specie}
                id_ctlg_scientic_name={animal.id_ctlg_scientic_name}
              />
            </Grid>
          </Zoom>
        ))}
      </Grid>
    </Box>
  );
}
