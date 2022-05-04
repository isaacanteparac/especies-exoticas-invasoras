import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardAnimal from "../animal/CardAnimal";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";

import { yesToken } from "../../helpers/crud_fetch";

export default function Home(props) {
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
        {allAnimal?.map((animal) => (
          <Zoom in={true} key={animal.id}>
            <Grid key={animal.id}>
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
                id_ctlg_scientic_name={animal.id_ctlg_scientific_name}
                id_ctlg_danger_level={animal.dangerLevelId}
              />
            </Grid>
          </Zoom>
        ))}
    </Box>
  );
}
