import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardAnimal from "./CardAnimal";
import Grid from "@mui/material/Grid";

export default function Home(props) {
  const url_animales = "http://localhost:6060/i/animal";
  const url_user = "http://localhost:6060/i/users/";
  const [allAnimal, setAllAnimal] = useState([]);

  const viewAnimal = async () => {
    await fetch(url_animales, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllAnimal(data);
      });
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
          <Grid item xs={4} sx={{ margin: "10px 0" }}>
            <CardAnimal
              key={animal.id}
              nameAnimal={animal.nameAnimal}
              scientificName={animal.scientificName}
              description={animal.description}
              name={animal.name}
              username={animal.username}
              photo={animal.photo}
              animalPhoto = {animal.animalPhoto}
              typeSpecie = {animal.typeSpecie}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
